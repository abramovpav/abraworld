var gulp = require('gulp');

gulp.task('lint', function () {
    gulp.src(config.paths.src.scripts)
        .pipe(gulp.dest(config.paths.dest.build.scripts))
});