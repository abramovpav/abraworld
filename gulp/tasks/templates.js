'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var header = require('gulp-header');
//var jade = require('gulp-jade');
//var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

module.exports = gulp.task('templates', function () {
    return gulp.src([config.paths.src.templates, config.paths.src.templatesHTML])
        //.pipe(gulpif(release, minifyHTML({empty: true, spare: true, quotes: true})))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('.ng-tmpl', '');
            path.extname = '';
        }))
        .pipe(templateCache({standalone: true, module: 'abraworld-ui.templates'}))
        .pipe(header('module.exports = '))
        .pipe(gulp.dest(config.paths.src.templatesCompiled));
});