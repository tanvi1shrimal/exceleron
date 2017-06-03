var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin');


// Copying over font files
gulp.task('fonts', function(){
	gulp.src('src/fonts/**.*')
	.pipe(gulp.dest('dist/fonts'))
});


// Copying over HTML files
gulp.task('html', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist/'))
});


// SASS --> CSS --> Autoprefix --> Minify --> final CSS file
gulp.task('styles', function () {
    sass('src/css/main.scss', {sourcemap: true, style: 'compact'})
        .pipe(autoprefixer({browsers:
			'ie >= 9, safari >= 7'
		}))
		.pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/'));
});


// Copying over JS files
gulp.task('scripts', function(){
	gulp.src('src/js/**/*.js')
	.pipe(gulp.dest('dist/js'))
});


// Optimizing Image files
gulp.task('images', function(){
	gulp.src('src/images/**')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/images/'))
});


// Watcher
gulp.task('watch', function(){
	gulp.watch('src/*.html', ['html'])
	gulp.watch('src/css/**/*.scss', ['styles'])
	gulp.watch('src/css/**/*.scss', ['darkTheme'])
	gulp.watch('src/js/**/*.js', ['scripts'])
	gulp.watch('src/images/**', ['images'])
	gulp.watch('src/fonts/**', ['fonts'])
	gulp.watch('src/css/**/*.css', ['docs'])
});

gulp.task('darkTheme', function() {
    sass('src/css/4-themes/ex-dark-theme.scss')
	.pipe(autoprefixer({browsers:
		'ie >= 9, safari >= 7'
	}))
	.pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

// Copy over files needed for docs.html
gulp.task('docs', function(){
	gulp.src('src/css/*.css')
	.pipe(gulp.dest('dist/css/'))
});


//  Run all tasks
gulp.task('default', ['fonts', 'html', 'styles', 'scripts', 'images', 'docs', 'watch']);