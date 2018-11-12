var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    concatCss = require('gulp-concat-css'),
    tailwindcss = require('tailwindcss'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat');

gulp.task('procss', function () {  
    return gulp.src('./src/css/page.css')
      .pipe(postcss([
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
      ]))
      .pipe(concatCss('page.css'))
      .pipe(cssnano({
        reduceIdents: false,
        discardComments: {removeAll: true}
      }))
      .pipe(gulp.dest('static/css/'));
  });