var gulp = require('gulp'),
    bailey = require('gulp-bailey'),
    gutil = require('gulp-util');

paths = {
  express: './**/*.bs'
};
gulp.task('default', function () {
  gulp.src(paths.express)
    .pipe(bailey({node: true}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});
