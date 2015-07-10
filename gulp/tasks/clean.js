var gulp = require('gulp'),
    del = require('del');

// Clean
gulp.task('clean', function (cb) {
    del([BUILD_FOLDER], cb)
});