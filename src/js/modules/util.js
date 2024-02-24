const body = document.querySelector('body');
const header = body.querySelector('.header');
const main = body.querySelector('.main');
const footer = body.querySelector('.footer');

export const getRandomInteger = (min, max) => {
	if (min < 0) {
		throw new Error('Минимальное число не может быть меньше 0');
	} else if (min > max) {
		throw new Error('Максимальное число не может быть меньше минимального');
	}

	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const throttle = (callee, timeout) => {
	let timer = null;

	return function perform(...args) {
		if (timer) {return;}

		timer = setTimeout(() => {
			callee(...args);

			clearTimeout(timer);
			timer = null;
		}, timeout);
	};
};

const lockPaddingValue = `${window.innerWidth - document.body.clientWidth}px`;

export const enableHeaderInert = () => {
	main.inert = true;

	if (footer) {
		footer.inert = true;
	}
};

export const disableHeaderInert = () => {
	header.inert = false;
	main.inert = false;

	if (footer) {
		footer.inert = false;
	}
};

export const enablePageInert = () => {
	header.inert = true;
	main.inert = true;

	if (footer) {
		footer.inert = true;
	}
};

export const disablePageInert = () => {
	header.inert = false;
	main.inert = false;

	if (footer) {
		footer.inert = false;
	}
};

export const hideScroll = () => {
	header.style.paddingRight = lockPaddingValue;
	main.style.paddingRight = lockPaddingValue;

	if (footer) {
		footer.style.paddingRight = lockPaddingValue;
	}

	const pagePosition = window.scrollY;
	body.classList.add('hide-scroll');
	body.dataset.position = pagePosition;
	body.style.top = `${-pagePosition}px`;
};

export const showScroll = () => {
	header.style.paddingRight = '0';
	main.style.paddingRight = '0';

	if (footer) {
		footer.style.paddingRight = '0';
	}

	const pagePosition = parseInt(body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('hide-scroll');
	window.scroll({ top: pagePosition, left: 0 });
	body.removeAttribute('data-position');
};

export const isEscEvent = (e) => e.key === 'Escape' || e.key === 'Esc';

export const onNameDigits = (e) => {
	if ('1234567890'.indexOf(e.key) !== -1) {
		e.preventDefault();
	}
};

export const onPhoneDigits = (e) => {
	if (e.keyCode === 46 ||
		e.keyCode === 8 ||
		e.keyCode === 9 ||
		e.keyCode === 27 ||
		// Разрешаем: Ctrl+A
		(e.keyCode === 189 && e.shiftKey === false) ||
		(e.keyCode === 187 && e.shiftKey === true) ||
		(e.keyCode === 67 && e.ctrlKey === true) ||
		(e.keyCode === 65 && e.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(e.keyCode >= 35 && e.keyCode <= 39) ||
		(e.keyCode === 86 && e.ctrlKey === true)) {
		// Ничего не делаем
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	}
};
