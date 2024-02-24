import { getRandomInteger } from './util.js';
import { createLoader } from './create-loader.js';

const cardsContainer = document.querySelector('.cards__container');
const cardTemplate = document.querySelector('#card');

const POSTS = 'https://jsonplaceholder.typicode.com/posts';

const PHOTOS = [
	{
		jpg: 'img/content/card-01.jpg',
		webp: 'img/content/card-01.webp',
	},
	{
		jpg: 'img/content/card-02.jpg',
		webp: 'img/content/card-02.webp',
	},
	{
		jpg: 'img/content/card-03.jpg',
		webp: 'img/content/card-03.webp',
	},
	{
		jpg: 'img/content/card-04.jpg',
		webp: 'img/content/card-04.webp',
	},
	{
		jpg: 'img/content/card-05.jpg',
		webp: 'img/content/card-05.webp',
	},
	{
		jpg: 'img/content/card-06.jpg',
		webp: 'img/content/card-06.webp',
	},
	{
		jpg: 'img/content/card-07.jpg',
		webp: 'img/content/card-07.webp',
	},
	{
		jpg: 'img/content/card-08.jpg',
		webp: 'img/content/card-08.webp',
	},
	{
		jpg: 'img/content/card-09.jpg',
		webp: 'img/content/card-09.webp',
	},
	{
		jpg: 'img/content/card-10.jpg',
		webp: 'img/content/card-10.webp',
	},
];

const LABELS = ['bridge', 'Water', 'Forest', 'Nature'];

const AUTHORS = [
	{
		name: 'Eugenia',
		date: 'July  24, 2019',
		datetime: '2019-07-24',
	},
	{
		name: 'Yulia',
		date: 'July  12, 2019',
		datetime: '2019-07-12',
	},
	{
		name: 'Maria',
		date: 'July  18, 2019',
		datetime: '2019-07-18',
	},
];

const createCard = (element, cardsList) => {
	const item = document.createElement('li');
	item.classList.add('cards__item');
	cardsList.append(item);

	const card = cardTemplate.content.cloneNode(true);
	const photo = PHOTOS[getRandomInteger(0, PHOTOS.length - 1)];
	const label = LABELS[getRandomInteger(0, LABELS.length - 1)];
	const author = AUTHORS[getRandomInteger(0, AUTHORS.length - 1)];

	card.querySelector('.card__heading a').textContent = element.title;
	card.querySelector('.card__label').textContent = label;
	card.querySelector('.card__text').textContent = element.body;
	card.querySelector('.card__post').innerHTML = `Posted by <em>${author.name}</em>, on ${author.date}`;
	card.querySelector('.card__post').datetime = author.datetime;
	card.querySelector('.card__image img').src = photo.jpg;
	card.querySelector('.card__image source').srcset = photo.webp;

	item.append(card);
};

const createPosts = (array, cardsList, buttonLoad) => {
	let count = 10;

	array.forEach((element, index) => {
		if (index < count) {
			createCard(element, cardsList);
		}
	});

	if (array.length > count) {
		cardsContainer.append(buttonLoad);

		buttonLoad.addEventListener('click', (e) => {
			e.preventDefault();

			if (array.length > count) {
				count = count + 5;

				array.forEach((element, index) => {
					if (index >= count - 5 && index < count) {
						createCard(element, cardsList);
					}
				});
			}

			if (array.length <= count) {
				buttonLoad.remove();
			}
		});
	}
};

const initPosts = (data) => {
	const array = data.slice(0, 30);

	const cardsList = document.createElement('ul');
	cardsList.classList.add('cards__list');
	cardsContainer.append(cardsList);

	const buttonLoad = document.createElement('button');
	buttonLoad.classList.add('cards__load-more', 'button-accent');
	buttonLoad.type = 'button';
	buttonLoad.innerHTML = `
		<span class="button-accent__text">Загрузить еще</span>
		<span class="button-accent__line"></span>
	`;

	createPosts(array, cardsList, buttonLoad);
};

const createError = () => {
	throw new Error('Не удалось загрузить посты');
};

const loadPosts = createLoader(POSTS, initPosts, createError);

export const initCards = () => {
	loadPosts();
};
