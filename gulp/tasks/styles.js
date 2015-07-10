var gulp = require('gulp');
var concatCss = require('gulp-concat-css');


gulp.task('styles', function () {
    gulp.src(config.paths.src.stylesGlob)
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest(config.paths.dest.build.styles));
});