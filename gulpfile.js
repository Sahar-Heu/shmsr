var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    tailwindcss = require('tailwindcss'),
    cssnano = require('gulp-cssnano');

gulp.task('procss', function () {  
    return gulp.src('./src/css/styles.css')
      .pipe(postcss([
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
      ]))
      //.pipe(cssnano())
      .pipe(gulp.dest('static/css/'));
  });