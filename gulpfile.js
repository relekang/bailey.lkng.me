var gulp = require('gulp'),
    bailey = require('gulp-bailey'),
    gutil = require('gulp-util'),
    gulpIgnore = require('gulp-ignore');

paths = {
  express: {
    src: './**/*.bs',
    dest: './'
  },
  public: {
    src: './public/javascripts/*.bs',
    dest: './public/javascripts/'
  }
};

gulp.task('express', function () {
  gulp.src(paths.express.src)
    .pipe(gulpIgnore.exclude(/javascripts/))
    .pipe(bailey({node: true}).on('error', gutil.log))
    .pipe(gulp.dest(paths.express.dest));
});

gulp.task('public', function () {
  gulp.src(paths.public.src)
    .pipe(bailey({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(paths.public.dest));
});

gulp.task('default', ['express', 'public']);
