var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true, camelize: true });
var config = require('./gulp.config')();

var wiredep = require('wiredep');
gulp.task('wiredep', function () {
    var wconfig = { directory: './bower_components/', verbose: true };
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
  return gulp.src(config.basedir)
    .pipe(plugins.webserver({
        host: 'localhost',
        port: 8080,
        livereload: true,
        open: true,
		fallback: 'index.html'
    }));
});

