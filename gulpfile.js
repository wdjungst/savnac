var gulp = require('gulp');
var less = require('gulp-less');

var watch = require('gulp-watch');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./modules/stylesheets/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./modules/'))

  .pipe(livereload());
});
gulp.task('watch', function() {
  gulp.watch('./modules/stylesheets/styles.less', ['less']);
});

gulp.task('default', ['watch']);
