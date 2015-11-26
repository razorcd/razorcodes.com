var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('sass', function () {
  return sass('app/stylesheets/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('dist/stylesheets'));
});
