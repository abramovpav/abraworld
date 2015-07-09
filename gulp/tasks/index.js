var gulp = require('gulp');

gulp.task('index', function() {
    console.log(config.paths.src.index);
    console.log(config.paths.dest.build.index);
    gulp.src(config.paths.src.index)
        .pipe(gulp.dest(config.paths.dest.build.index))
});