export const gallerySwiperSelector = '.gallery__swiper';
export const gallerySwiperSettings = {
  navigation: {
    nextEl: '.slider__button_type_next',
    prevEl: '.slider__button_type_prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  }
}