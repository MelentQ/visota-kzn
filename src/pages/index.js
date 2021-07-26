import Swiper from '../vendor/swiper/swiper-bundle.min.js';
import '../vendor/swiper/swiper-bundle.min.css';

import {gallerySwiperSelector, gallerySwiperSettings} from '../utils/constants';

import './index.css';

// Swiper
// API: https://swiperjs.com/swiper-api
const gallerySwiper = new Swiper(gallerySwiperSelector, gallerySwiperSettings);
const clientsSwiper = new Swiper('.clients__swiper', {
  simulateTouch: true,
  grabCursor: true,
  loop: true,
})

const header = document.querySelector('.header');

const modalPanel = document.querySelector('.modal');
const modalPanelCloseBtn = modalPanel.querySelector('.modal__close-btn');
const toggleModalPanel = () => {
  modalPanel.classList.toggle('modal_opened');
  header.classList.toggle('header_hidden');
}
modalPanelCloseBtn.addEventListener('click', toggleModalPanel);

const openMenuBtn = document.querySelector('.header__menu');
openMenuBtn.addEventListener('click', toggleModalPanel);

const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => link.addEventListener('click', toggleModalPanel))
