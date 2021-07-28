import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import '../vendor/swiper/swiper-bundle.min.css';

import ModalPanel from '../components/ModalPanel.js';
import ImageModalPanel from '../components/ImageModalPanel.js';

import {
  gallerySwiperSelector,
  gallerySwiperSettings,
  clientsSwiperSelector,
  clientsSwiperSettings
} from '../utils/constants';

import '../utils/smoothScroll';
import '../utils/yandexMap';
import '../utils/animations';

import './index.css';

// Swiper
// API: https://swiperjs.com/swiper-api
const gallerySwiper = new Swiper(gallerySwiperSelector, gallerySwiperSettings);
const clientsSwiper = new Swiper(clientsSwiperSelector, clientsSwiperSettings);

const header = document.querySelector('.header');
let isModalOpen = false;
let scrollPrev = 0;

// Header hiding on scroll down
// or when modal is open
document.addEventListener('scroll', () => {
  let scrolled = window.pageYOffset;
  if (isModalOpen || scrolled > 60 && scrolled > scrollPrev) {
    header.classList.add('header_hidden');
  }
  else {
    header.classList.remove('header_hidden');
  }
  scrollPrev = scrolled;
})

const setIsModalOpen = (isOpen) => {
  isModalOpen = isOpen;
}
const onOpenModal = () => {
  header.classList.add('header_hidden');
  setIsModalOpen(true);
}
const onCloseModal = () => {
  header.classList.remove('header_hidden');
  setIsModalOpen(false);
}

// Modal panel for menu
const menuModal = new ModalPanel({
  selector: '#menuModal',
  onOpen: onOpenModal,
  onClose: onCloseModal
})
menuModal.setEventListeners();
const openMenuBtn = document.querySelector('.header__menu');
openMenuBtn.addEventListener('click', menuModal.openModalPanel.bind(menuModal));
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => link.addEventListener('click', menuModal.closeModalPanel.bind(menuModal)))
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const cardPath = card.querySelector('.card__image').src;
  const cardDescription = card.querySelector('.card__description').textContent;
  card.addEventListener('click', () => {
    cardModal.openModalPanel(cardPath, cardDescription)
  })
})

// Modal panel for cards
const cardModal = new ImageModalPanel({
  selector: '#cardModal',
  onOpen: onOpenModal,
  onClose: onCloseModal
})
cardModal.setEventListeners();
const galleryCards = document.querySelectorAll('.slide');
galleryCards.forEach(card => {
  const cardPath = card.querySelector('.slide__image').src;
  const cardDescription = card.querySelector('.slide__description').textContent;
  card.addEventListener('click', () => {
    cardModal.openModalPanel(cardPath, cardDescription)
  })
})

