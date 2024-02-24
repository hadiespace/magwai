import TransferElements from 'transfer-elements';

const transferHeaderElements = () => {
	new TransferElements(
		{
			sourceElement: document.querySelector('.header__contacts'),
			breakpoints: {
				599: {
					targetElement: document.querySelector('.menu__container'),
				},
			},
		},
	);

	new TransferElements(
		{
			sourceElement: document.querySelector('.navigation'),
			breakpoints: {
				1299: {
					targetElement: document.querySelector('.menu__container'),
				},
			},
		},
	);
};

export const initTransfer = () => {
	transferHeaderElements();
};
