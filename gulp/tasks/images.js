import webp from 'gulp-webp';
import imagemin, { mozjpeg, optipng, svgo } from 'gulp-imagemin';

export const images = () => app.gulp.src(app.path.source.images)
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: 'IMAGES',
			message: 'Error: <%= error.message %>',
		}),
	))
	.pipe(app.plugins.newer(app.path.dist.images))
	.pipe(webp({ quality: 100 }))
	.pipe(app.gulp.dest(app.path.dist.images))
	.pipe(app.gulp.src(app.path.source.images))
	.pipe(app.plugins.newer(app.path.dist.images))
	.pipe(
		app.plugins.gulpIf(
			app.isProd,
			imagemin([
				mozjpeg({ quality: 100, progressive: true }),
				optipng({ optimizationLevel: 5 }),
				svgo({
					plugins: [
						{ removeViewBox: true },
						{ cleanupIDs: true },
						{ inlineStyles: false },
					],
				}),
			]),
		),
	)
	.pipe(app.gulp.dest(app.path.dist.images))
	.pipe(app.gulp.src(app.path.source.svg))
	.pipe(app.gulp.dest(app.path.dist.images))
	.pipe(app.plugins.browsersync.stream());
