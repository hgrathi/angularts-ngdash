var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true, camelize: true });
var config = require('./gulp.config')();

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

gulp.task('release', function(cb){
   plugins.sequence('clean', 'jscs', ['dist-nomin', 'dist-min'], cb); 
});

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
        host: 'localhost',
        port: PORT || 8080,
        livereload: true,
        open: true,
		fallback: config.index
    }));
});
