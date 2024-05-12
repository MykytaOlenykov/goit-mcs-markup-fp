import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
      delay: 100,
      duration: 600,
      easing: 'ease-in-out',
      once: true,
  });
});