var gulp = require('gulp');

gulp.task('styles', function() {
    gulp.src(config.paths.src.stylesGlob)
        .pipe(gulp.dest(config.paths.dest.build.styles))
});