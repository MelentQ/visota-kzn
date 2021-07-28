const yandexMapContainer = document.querySelector('.contacts__map-container');
const yandexMapWrapper = yandexMapContainer.querySelector('.contacts__map-wrapper');
const yandexMap = yandexMapContainer.querySelector('.contacts__map');

yandexMapWrapper.addEventListener('click', () => {
  yandexMap.classList.remove('contacts__map_disabled');
  yandexMapWrapper.classList.add('contacts__map-wrapper_closed');
})