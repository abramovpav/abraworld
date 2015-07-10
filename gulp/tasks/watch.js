'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
//var livereloadServer = livereload(config.ports.livereloadServer);

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(config.paths.src.livereload).on('change', livereload.changed);

    watch([config.paths.src.scripts], ['lint']);
    watch([config.paths.src.index], ['index']);
    watch([config.paths.src.templates, config.paths.src.templatesHTML], ['templates']);
    watch([config.paths.src.stylesGlob], ['styles']);
});
