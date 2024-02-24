export const onLinkClick = (e) => {
	if (e.target.closest('a[href^="#"]')) {
		e.preventDefault();

		const id = String(e.target.getAttribute('href'));
		const elem = document.querySelector(id);

		if (elem) {
			elem.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	}
};

export const initLinkScroll = () => document.addEventListener('click', onLinkClick);
