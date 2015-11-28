'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st'),
    open = require('gulp-open');
    // sourcemaps = require('gulp-sourcemaps');


gulp.task('clean', function () {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('build_css', ['clean'], function () {
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


gulp.task('build_index', ['build_css'], function () {
  var sources = gulp.src(['dist/**/*.js', 'dist/**/*.css'], {read: false});

  return gulp.src('app/index.html')
             .pipe(gulp.dest('dist'))
             .pipe(inject(sources, {relative: true}))
             .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
             .pipe(gulp.dest('dist'))
             .pipe(livereload());
});


gulp.task("watch", ['build'], function(){
  livereload.listen({ basePath: 'dist' });
  gulp.watch('app/**/*', ['build']);
})


gulp.task('open_uri', ['server'], function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://localhost:8080', livereload: true}));
});


gulp.task('server', ['build'], function(done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8080, done);
});


gulp.task("build", ['clean', 'build_css', 'build_index']);
gulp.task("serv", ['build', 'watch', 'server', 'open_uri']);

gulp.task('default', ['serv']);
