var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	htmlReplace = require('gulp-html-replace'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	cssmin = require('gulp-cssmin');

gulp.task('default', ['copiar'], function(){
	
	gulp.start('build-img', 'usemin');
});

gulp.task('copiar', ['apagar'], function(){ //copiar tem a dependencia apagar
	return gulp.src('src/**/*') //leitura
		.pipe(gulp.dest('dist')); //escrita
});

gulp.task('apagar', function(){
	return gulp.src('dist') //return = o copiar só exec após apagar
		.pipe(clean());
});


gulp.task('build-img', function(){

	gulp.src('dist/assets/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/assets/images'));

});

gulp.task('usemin', function(){
	gulp.src('dist/**/*.html')
		.pipe(usemin({
			'js': [uglify],
			'css': [cssmin]
			}))
		.pipe(gulp.dest('dist'))
});