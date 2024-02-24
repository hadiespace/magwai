import { validateForm } from './validate-form.js';
import { openModalSuccess } from './init-modal.js';

const forms = document.querySelectorAll('[data-form]');

export const sendForm = () => {
	window.addEventListener('DOMContentLoaded', () => {
		forms.forEach((form) => {
			form.addEventListener('submit', async (e) => {
				e.preventDefault();

				const error = validateForm(form);

				if (error === 0) {
					openModalSuccess();
					form.reset();
				}
			});
		});
	});
};
