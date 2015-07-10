var gulp = require('gulp');

gulp.task('index', function () {
    gulp.src(config.paths.src.index)
        .pipe(gulp.dest(config.paths.dest.build.index))
});