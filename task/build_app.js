'use strict';

var gulp = require('gulp');
var merge = require('gulp-merge-json');
var del = require('del');
var path = require('path');
var utils = require('./utils');

var srcDir = path.resolve('src');
var destDir = path.resolve('dist');

gulp.task('environment', function() {
    gulp.src(['config/config.json', 'config/' + utils.getEnvName() + '_config.json'])
        .pipe(merge({
            fileName: 'config.json',
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('clean:dist', function () {
  return del([
    'dist'
  ]);
});

gulp.task('build', ['environment']);
gulp.task('re-build', ['environment', 'clean:dist']);