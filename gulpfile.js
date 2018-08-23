var gulp = require('gulp'),
browserSync = require('browser-sync');
watch = require('gulp-watch');
sass = require('gulp-sass');

//vars files
srcFilesSass = "app/src/scss/**/*.scss";
destFilesCss = "app/dist/css";

gulp.task('sass', function() {
    return gulp.src(srcFilesSass)
        .pipe(sass())
        .pipe(gulp.dest(destFilesCss))
        .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch(srcFilesSass, ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});



gulp.task('default', ['serve']);
