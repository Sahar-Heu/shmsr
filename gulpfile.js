var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concatCss = require('gulp-concat-css'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat');

gulp.task('procss', function () {
    return gulp.src('./src/css/page.css')
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
      .pipe(concatCss('page.css'))
      .pipe(cssnano({
        reduceIdents: false,
        discardComments: {removeAll: true}
      }))
      .pipe(gulp.dest('static/css/'));
  });