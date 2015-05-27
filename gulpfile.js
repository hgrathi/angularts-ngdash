var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('serve', function () {
  return gulp.src('.')
    .pipe(webserver({
        host: 'localhost',
        port: 8080,
        livereload: true,
        open: true,
		fallback: 'index.html'
    }));
});