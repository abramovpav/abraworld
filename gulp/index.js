//// Styles
////gulp.task('styles', function() {
////  return sass('src/styles/main.scss', { style: 'expanded' })
////    .pipe(autoprefixer('last 2 version'))
////    .pipe(gulp.dest('dist/styles'))
////    .pipe(rename({ suffix: '.min' }))
////    .pipe(minifycss())
////    .pipe(gulp.dest('dist/styles'))
////    .pipe(notify({ message: 'Styles task complete' }));
////});
//
//// Scripts
//gulp.task('scripts', function() {
//  return gulp.src('src/scripts/**/*.js')
//    .pipe(jshint('.jshintrc'))
//    .pipe(jshint.reporter('default'))
//    .pipe(concat('main.js'))
//    .pipe(gulp.dest('dist/scripts'))
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(uglify())
//    .pipe(gulp.dest('dist/scripts'))
//    .pipe(notify({ message: 'Scripts task complete' }));
//});
//
//// Images
////gulp.task('images', function() {
////  return gulp.src('src/images/**/*')
////    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
////    .pipe(gulp.dest('dist/images'))
////    .pipe(notify({ message: 'Images task complete' }));
////});
//

//
//// Default task
//gulp.task('default', ['clean'], function() {
//    gulp.start('scripts');
////    gulp.start('styles', 'scripts', 'images');
//});
//
//// Watch
//gulp.task('watch', function() {
//
//  // Watch .scss files
////  gulp.watch('src/styles/**/*.scss', ['styles']);
//
//  // Watch .js files
//  gulp.watch('src/scripts/**/*.js', ['scripts']);
//
//  // Watch image files
////  gulp.watch('src/images/**/*', ['images']);
//
//  // Create LiveReload server
//  livereload.listen();
//
//  // Watch any files in dist/, reload on change
//  gulp.watch(['dist/**']).on('change', livereload.changed);
//
//});
'use strict';

var fs = require('fs'),
    tasks = fs.readdirSync('./gulp/tasks/');

require('../config/gulp');


tasks.forEach(function (task) {
    require('./tasks/' + task);
});