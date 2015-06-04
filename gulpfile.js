
////////////////////////////////////// START ///////////////////////////////////////////////////////////////

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true, camelize: true });
var config = require('./gulp.config')();
var argv = require('yargs').argv;
var fs = require('fs');
var sequence = require("gulp-sequence").use(gulp);

////////////////////////////////////////// Local RUN /////////////////////////////////////////////////////////

var wiredep = require('wiredep');
gulp.task('wiredep', function () {
    var wconfig = { directory: './bower_components/', verbose: true, devDependencies: true };
    return gulp.src(config.index)
        .pipe(wiredep.stream(wconfig))
        .pipe(gulp.dest(config.base));
});

gulp.task('inject', function () {
    var sourcejs = gulp.src(config.sourcejs, { read: false });
    var sourceopt = { name: 'sourcejs', addRootSlash: false };

    var testjs = gulp.src(config.testfixturejs, { read: false });
    var testopt = { name: 'testfixturejs', addRootSlash: false };

    return gulp.src(config.index)
        .pipe(plugins.inject(sourcejs, sourceopt))
        .pipe(plugins.inject(testjs, testopt))
        .pipe(gulp.dest(config.base));
});

gulp.task('serve', ['wiredep','inject'], function () {
  return gulp.src(config.base)
    .pipe(plugins.webserver({
        host: process.env.IP || 'localhost',
        port: process.env.PORT || 8080,
        livereload: true,
        open: true,
		fallback: config.index
    }));
});

gulp.task('heroku', ['wiredep','inject'], function () {
  return gulp.src(config.base)
    .pipe(plugins.webserver({
        host: '0.0.0.0',
        port: process.env.PORT,
        livereload: false,
        open: false,
		fallback: config.index
    }));
});

////////////////////////////////////////// BUILD /////////////////////////////////////////////////////////

var del = require('del');
gulp.task('clean', function (cb) {
    del(config.dist, cb);
});

gulp.task('jsbeautify', function(){
   return gulp.src(config.sourcejs)
   .pipe(plugins.jsbeautifier());
});

gulp.task('jscs', ['jsbeautify'], function(){
    return gulp.src(config.sourcejs)
    .pipe(plugins.jscs({configPath: '.jscsrc', fix: true}))
    .pipe(gulp.dest(config.base));
});

gulp.task('jshint',['jscs'], function(){
    return gulp.src(config.sourcejs)
    .pipe(plugins.jshint());
});

gulp.task('dist-nomin', function(){
   return gulp.src(config.sourcejs)
        .pipe(gulp.dest(config.dist));
});

gulp.task('dist-min', function(){
   return gulp.src(config.sourcejs)
        .pipe(plugins.concat('ngdash.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.dist));
});

gulp.task('build', function(cb){
   sequence('clean', 'jshint', ['dist-nomin', 'dist-min'], cb);
});

/////////////////////////////////////////// TEST /////////////////////////////////////////////////////////

gulp.task('test', function(){
    return gulp.src('./foo/bar')
    .pipe(plugins.karma({action : 'run', configFile: './karma.conf.js'}));
})

///////////////////////////////////////// RELEASE - PUBLISH //////////////////////////////////////////////

function getReleaseType(){
    var types = ['major','minor','patch'];
    var rel = argv.type || 'minor';
    if(types.indexOf(rel) === -1){
        rel = 'patch'
    }
    return rel.toLowerCase();
}

var bumpOpt= {};
gulp.task('bump-version', function () {
  return gulp.src(['./bower.json', './package.json'])
    .pipe(plugins.prompt.prompt({
        type: 'list',
        name: 'bump',
        message: 'What type of bump would you like to do? ',
        choices: ['patch', 'minor', 'major']
    }, function(res){
        bumpOpt.type = res.bump;
    }))
    .pipe(plugins.bump(bumpOpt).on('error', plugins.util.log))
    .pipe(gulp.dest('./'));
});

gulp.task('commit-changes', function () {
  var version = getPackageJsonVersion();
  return gulp.src(config.base)
    .pipe(plugins.git.commit('[ ' + bumpOpt.type +' ] Bumped version number : ' + version, {args: '-a'}));
});

gulp.task('push-changes', function (cb) {
  plugins.git.push('origin', 'master', cb);
});

function getPackageJsonVersion () {
//We parse the json file instead of using require because require caches multiple calls so the version number won't be updated
return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
};

gulp.task('create-new-tag', function (cb) {
  var version = getPackageJsonVersion();
  plugins.git.tag(version, 'Created Tag for version: ' + version, function (error) {
    if (error) { return cb(error); }
    plugins.git.push('origin', 'master', {args: '--tags'}, cb);
  });
});

gulp.task('release', function (callback) {
    function handleError(error){
        if (error) {
            console.log(error.message);
        } else {
            console.log('RELEASE FINISHED SUCCESSFULLY');
        }
        callback(error);
    }
    sequence('test', 'build', 'bump-version','commit-changes','push-changes','create-new-tag', handleError);
});

gulp.task('push-ci-branch', function (cb) {
  plugins.git.push('heroku', 'master', cb);
});

gulp.task('publish', function(callback) {
    function handleError(error){
        if (error) {
            console.log(error.message);
        } else {
            console.log('RELEASE FINISHED SUCCESSFULLY');
        }
        callback(error);
    }
    sequence('release', 'push-ci-branch', handleError);
});

/////////////////////////////////////////////////////  END //////////////////////////////////////
