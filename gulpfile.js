import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { css } from './gulp/tasks/css.js';
import { js } from './gulp/tasks/js.js';
import { switcher } from './gulp/tasks/switcher.js';
import { images } from './gulp/tasks/images.js';
import { sprite } from './gulp/tasks/sprite.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
	isProd: process.argv.includes('--prod'),
	isDev: !process.argv.includes('--prod'),
	path,
	gulp,
	plugins,
};

const watcher = () => {
	gulp.watch(path.watch.assets, copy);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.css, css);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.js, switcher);
	gulp.watch(path.watch.images, images);
	gulp.watch(path.watch.sprite, sprite);
};

const mainTasks = gulp.parallel(
	copy,
	html,
	css,
	js,
	switcher,
	images,
	sprite,
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const prod = gulp.series(reset, mainTasks);

gulp.task('default', dev);

export { dev, prod };
