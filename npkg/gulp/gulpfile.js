// new
const { src, dest, parallel } = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function html() {
  return src('client/templates/*.pug')
    .pipe(pug())
    .pipe(dest('build/html'))
}

function css() {
  return src('client/templates/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(dest('build/css'))
}

function js() {
	return src('client/javascript/*.js', { sourcemaps: true })
		.pipe(concat('app.min.js'))
		.pipe(dest('build/js', { sourcemaps: true }))
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, js);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// old
var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('html', function () {
	return gulp.src('client/templates/*.pug')
		.pipe( pug() )
		.pipe( gulp.dest('build/html') )
});

gulp.task('css', function () {
	return gulp.src('client/templates/*.less')
		.pipe( less() )
		.pipe( minifyCSS() )
		.pipe( gulp.dest('build/css') )
});

gulp.task( 'default', ['html', 'css'] );


