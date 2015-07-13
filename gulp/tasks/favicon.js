'use strict';

var gulp = require('gulp');
//var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');

module.exports = gulp.task('favicon', function () {
  return gulp.src(config.paths.src.favicon)
    //.pipe(gulpif(release, imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(config.paths.dest.build.favicon));
    //.pipe(gulpif(release, gulp.dest(config.paths.dest.release.images), gulp.dest(config.paths.dest.build.images)));
});
