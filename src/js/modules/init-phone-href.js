const phones = document.querySelectorAll('[data-phone]');

export const initPhoneHref = () => {
	if (phones) {
		phones.forEach((phone) => {
			const value = phone.querySelector('span').textContent;
			phone.href = `tel:${value.replace(/\s/g, '')}`;
		});
	}
};
