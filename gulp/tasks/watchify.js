'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserifyShim = require('browserify-shim');

gulp.task('watchify', function () {
    watchify.args.debug = true;
    var b = browserify([config.paths.src.modules], watchify.args);
    var bundler = watchify(b);


    bundler.transform(browserifyShim);

    bundler.on('update', rebundle);

    function rebundle() {
        return bundler.bundle()
            .pipe(source(config.filenames.build.scripts))
            .pipe(gulp.dest(config.paths.dest.build.scripts));
    }

    return rebundle();
});
