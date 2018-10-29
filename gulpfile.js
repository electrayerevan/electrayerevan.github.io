const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageResize = require('gulp-image-resize');

gulp.task('mozjpeg', () =>
	gulp.src('img/**/*.jpg')
		.pipe(imagemin([imageminMozjpeg({
			quality: 85
		})]))
		.pipe(gulp.dest('dist'))
);

gulp.task('cover', function () {
	gulp.src('img/products/*.jpg')
		.pipe(imageResize({
			width: 1000,
			height: 1000,
			upscale: false,
			cover: true,
			noProfile: true,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('coverWidth', function () {
	gulp.src('dist/*.jpg')
		.pipe(imageResize({
			width: 1000,
			upscale: false,
			cover: true,
			noProfile: true,
			imageMagick: true
		}))
		.pipe(gulp.dest('dist2'));
});

gulp.task('resize', function () {
	gulp.src('img/products/*.png')
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
});


