import Swiper from 'swiper';
import { Keyboard } from 'swiper/modules';
import 'swiper/css/bundle';

new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  loop: true,
  grabCursor: true,
  modules: [Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
