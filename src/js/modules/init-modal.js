import { isEscEvent } from './util.js';
const header = document.querySelector('.header');
const modals = document.querySelectorAll('.modal');
let isOpen = false;
modals.forEach((modal) => (modal.inert = true));
const openModal = (targetData) => {
	const modal = document.querySelector(`#${targetData}`);
	if (modal) {
		isOpen = true;
		const modalContent = modal.querySelector('.modal__content');
		modalContent.classList.remove('hidden');
		setTimeout(() => {
			modal.inert = false;
			modal.classList.add('open');
			header.classList.add('header--menu');
		}, 100);
		document.addEventListener('keydown', onModalCloseKeyDown);
	}
};
export const closeModal = () => {
	const modalOpen = document.querySelector('.modal.open');
	const modalSuccess = document.querySelector('#modal-success');
	const file = document.querySelector('.file');
	if (file) {
		const elements = file.querySelectorAll('.file__remove');
		elements.forEach((element) => {
			element.click();
		});
	}
	if (isOpen) {
		if (modalOpen) {
			const modalForm = modalOpen.querySelector('form');
			const modalFields = modalOpen.querySelectorAll('.field');
			const form = document.querySelector('.form.send');
			modalOpen.inert = true;
			modalOpen.classList.remove('open');
			document.removeEventListener('keydown', onModalCloseKeyDown);
			isOpen = false;
			if (modalForm) {
				modalForm.reset();
				modalFields.forEach((field) => {
					field.classList.remove('field--error');
					field.classList.remove('field--value');
					field.classList.remove('input');
				});
			}
			if (form) {
				form.classList.remove('send');
			}
		}
		modalSuccess.classList.remove('open');
	}
};
function onModalCloseKeyDown(e) {
	if (isEscEvent(e)) {
		closeModal();
	}
}
export const openModalSuccess = () => {
	const modalOpen = document.querySelector('.modal.open');
	const formSend = document.querySelector('.form.send');
	const modalSuccess = document.querySelector('#modal-success');
	if (modalOpen) {
		modalOpen.inert = true;
		setTimeout(() => {
			modalSuccess.inert = false;
			modalSuccess.classList.add('open');
			modalOpen.classList.remove('open');
		}, 300);
	}
	if (formSend) {
		setTimeout(() => {
			modalSuccess.inert = false;
			modalSuccess.classList.add('open');
			isOpen = true;
		}, 100);
	}
};
const onModalClick = (e) => {
	if (e.target.dataset.modal) {
		e.preventDefault();
		openModal(e.target.dataset.modal);
	}
	if (e.target.closest('.modal-close') || e.target.classList.contains('modal')) {
		e.preventDefault();
		closeModal();
	}
};
export const initModal = () => {
	document.addEventListener('click', onModalClick);
};
