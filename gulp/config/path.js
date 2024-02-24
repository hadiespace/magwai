import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './docs';
const srcFolder = './src';

export const path = {
	dist: {
		assets: `${distFolder}/`,
		html: `${distFolder}/`,
		css: `${distFolder}/css/`,
		js: `${distFolder}/js/`,
		images: `${distFolder}/img/`,
		fonts: `${distFolder}/fonts/`,
	},
	source: {
		assets: `${srcFolder}/assets/**/*.*`,
		html: `${srcFolder}/pug/*.pug`,
		css: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/index.js`,
		switcher: `${srcFolder}/js/switcher.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		sprite: `${srcFolder}/icons/*.svg`,
	},
	watch: {
		assets: `${srcFolder}/assets/**/*.*`,
		html: `${srcFolder}/pug/**/*.pug`,
		css: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,webp}`,
		sprite: `${srcFolder}/icons/*.svg`,
	},
	clean: distFolder,
	distFolder,
	srcFolder,
	rootFolder,
};
