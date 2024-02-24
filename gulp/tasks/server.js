export const server = () => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.dist.html}`,
		},
		notify: false,
		port: 3000,
		open: false,
		cors: false,
		ui: false,
	});
};
