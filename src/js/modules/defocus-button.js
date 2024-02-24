const onButtonMouseUp = (e) => {
	if (e.target.tagName === 'BUTTON') {
		e.target.blur();
	}
};

export const defocusButton = () => document.addEventListener('mouseup', onButtonMouseUp);
