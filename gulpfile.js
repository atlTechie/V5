var gulp = require('gulp');
var sass = require('gulp-sass');

//Compile SCSS
gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

//Constantly WATCH all files
gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
});
