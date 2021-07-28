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
  simulateTouch: false,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  touchRatio: 1
}

export const clientsSwiperSelector = '.clients__swiper';
export const clientsSwiperSettings = {
  simulateTouch: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    }
  },
  spaceBetween: 40,
  centeredSlides: true
}