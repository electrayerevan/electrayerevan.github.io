const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageResize = require('gulp-image-resize');


function yesterday() {
	const date = new Date();
	return date.setDate(date.getDate() - 1);
}

function mozjpeg() {
	return gulp.src('img/**/*.jpg', { since: yesterday() })
		.pipe(imagemin([imageminMozjpeg({
			quality: 85
		})]))
		.pipe(gulp.dest('dist'))
}

function cover() {
	return gulp.src('img/products/*.jpg')
		.pipe(imageResize({
			width: 1000,
			height: 1000,
			upscale: false,
			cover: true,
			noProfile: true,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist'));
};

function coverWidth() {
	return gulp.src('dist/*.jpg')
		.pipe(imageResize({
			width: 1000,
			upscale: false,
			cover: true,
			noProfile: true,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist2'));
}

function resize() {
	return gulp.src('img/products/*.png')
		.pipe(imageResize({
			height: 1000,
			upscale: false,
			cover: true,
			imageMagick: true,
			noProfile: true,
			format: 'jpeg'
		}))
		.pipe(imageResize({
			width: 1000,
			upscale: false,
			cover: true,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist2'));
};

exports.mozjpeg = mozjpeg;
exports.cover = cover;
exports.coverWidth = coverWidth;
exports.resize = resize;
