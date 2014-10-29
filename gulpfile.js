/* global require */

'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

var paths = {
    less: './src/less/**/*.less',
    html: './src/index.html'
};

var port = 8080;

gulp.task('open', function() {
	var options = {
		url: 'http://localhost:' + port
	};
    gulp.src(paths.html)
        .pipe(open('', options));
});

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: 'src',
        port: port
    });
});


gulp.task('less', function() {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(paths.less, ['compile-less']);
});

gulp.task('default', ['less', 'webserver', 'watch', 'open']);
// gulp.task('default', ['less']);
