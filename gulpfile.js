/* global require */

'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    header = require('gulp-header'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

var paths = {
    less: './src/less/**/*.less',
    html: './src/*.html',
    js: './src/js/*.js',
};

var port = 8080;

var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.task('open', function() {
    var options = {
        url: 'http://localhost:' + port
    };
    gulp.src('./src/index.html')
        .pipe(open('', options));
});

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        root: 'src',
        port: port
    });
});

gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp.src(paths.js)
        .pipe(connect.reload());
});

gulp.task('less', function() {
    return gulp.src(paths.less)
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
        .pipe(connect.reload());
});

gulp.task('minify-css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('uglify', function() {
  return gulp.src('./src/js/*.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(header(banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function() {
    gulp.watch(paths.less, ['less']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.html, ['js']);
});

gulp.task('default', ['less', 'webserver', 'watch', 'open']);

gulp.task('build', ['minify-css', 'uglify']);
