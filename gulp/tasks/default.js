'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
  //if (release) {
  //  runSequence(
  //    'clean',
  //    ['index', 'styles', 'images', 'assets', 'bootfonts', 'templates', 'lint'],
  //    'browserify',
  //    ['minify', 'serve']
  //  );
  //} else {
    runSequence(
      'clean',
      ['index'],
      ['serve']
    );
  //}
});

//['index', 'styles', 'images', 'assets', 'bootfonts', 'templates', 'lint'],
//      ['watchify', 'watch', 'serve']