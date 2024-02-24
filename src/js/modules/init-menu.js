import {
	isEscEvent,
	hideScroll,
	showScroll,
} from './util.js';

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.header__toggle');

menu.inert = true;

const openMenu = () => {
	toggle.setAttribute('aria-expanded', 'true');
	menu.classList.add('menu--opened');
	menu.inert = false;
	hideScroll();
	document.addEventListener('keydown', onMenuCloseKeyDown);
};

const closeMenu = () => {
	toggle.setAttribute('aria-expanded', 'false');
	menu.classList.remove('menu--opened');
	menu.inert = true;
	showScroll();
	document.removeEventListener('keydown', onMenuCloseKeyDown);
};

function onMenuCloseKeyDown(e) {
	if (isEscEvent(e)) {
		closeMenu();
	}
}

const onMenuClick = (e) => {
	if (e.target === toggle) {
		e.preventDefault();

		if (toggle.getAttribute('aria-expanded') === 'false') {
			openMenu();
		} else {
			closeMenu();
		}
	}
};

export const initMenu = () => {
	document.addEventListener('click', onMenuClick);
};
