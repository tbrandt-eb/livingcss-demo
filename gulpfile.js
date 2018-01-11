
const connect = require('gulp-connect');
const gulp = require('gulp');
const livingcss = require('gulp-livingcss');
const sass = require('gulp-sass');

gulp.task('default', () => {
  return gulp.src('./src/**/*.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(livingcss())
    .pipe(gulp.dest('./dist'));
});



gulp.task('connect:start', () => {
  connect.server({
    livereload: true,
    port: 1234,
  });
});

gulp.task('connect:stop', () => {
  connect.serverClose();
});
