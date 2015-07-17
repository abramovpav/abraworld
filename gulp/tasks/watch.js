'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var livereload = require('gulp-livereload');

gulp.task('watch', function () {
    livereload.listen({port: config.ports.livereloadServer});
    gulp.watch(config.paths.src.livereload).on('change', livereload.changed);
    gulp.watch([config.paths.src.scripts], batch(function (events, done) {
        gulp.start('lint', done);
    }));
    gulp.watch([config.paths.src.index], batch(function (events, done) {
        gulp.start('index', done);
    }));
    gulp.watch([config.paths.src.templates, config.paths.src.templatesHTML], batch(function (events, done) {
        gulp.start('templates', done);
    }));
    gulp.watch([config.paths.src.stylesGlob], batch(function (events, done) {
        gulp.start('styles', done);
    }))
});
