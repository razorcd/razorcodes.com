var gulp = require('gulp');
var inject = require('gulp-inject');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
// var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('build_css', function () {
  var sass = require('gulp-sass');
  var minifyCss = require('gulp-minify-css');

  return gulp.src('app/stylesheets/**/*.scss')
             // .pipe(sourcemaps.init())
               .pipe(sass())
               .pipe(concat('main.css'))
               .pipe(minifyCss())
             // .pipe(sourcemaps.write())
             .pipe(gulp.dest('dist/stylesheets'));
});



gulp.task('build_index', function () {
  var sources = gulp.src(['dist/**/*.js', 'dist/**/*.css'], {read: false});

  return gulp.src('app/index.html')
             .pipe(gulp.dest('dist'))
             .pipe(inject(sources, {relative: true}))
             .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
             .pipe(gulp.dest('dist'));
});
