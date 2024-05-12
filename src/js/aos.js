import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
      delay: 200,
      duration: 1000,
      easing: 'ease-in-out',
  });
});