const animationDuration = 250;

const refs = {
  openBurgerBtn: document.querySelector('[data-burger-open]'),
  closeBurgerBtn: document.querySelector('[data-burger-close]'),
  navLinks: document.querySelectorAll('[data-nav-link]'),
  burgerMenu: document.querySelector('[data-burger]'),
  burgerMenuContent: document.querySelector('[data-burger-content]'),
  body: document.querySelector('body'),
};

const handleZIndex = () => {
  if (refs.burgerMenu.style.zIndex === '100') {
    setTimeout(() => {
      refs.burgerMenu.style.zIndex = '-1';
    }, animationDuration);
  } else {
    refs.burgerMenu.style.zIndex = '100';
  }
};

const handleBodyOverflow = () => {
  if (refs.burgerMenu.classList.contains('is-hidden')) {
    refs.body.style.overflow = 'auto';
  } else {
    refs.body.style.overflow = 'hidden';
  }
};

const toggleBurger = () => {
  refs.burgerMenu.classList.toggle('is-hidden');

  handleBodyOverflow();
  handleZIndex();
};

refs.openBurgerBtn.addEventListener('click', toggleBurger);
refs.closeBurgerBtn.addEventListener('click', toggleBurger);
refs.navLinks.forEach(link => {
  link.addEventListener('click', toggleBurger);
});

// Outside click
window.addEventListener('click', e => {
  if (
    refs.burgerMenu.classList.contains('is-hidden') ||
    refs.burgerMenuContent.contains(e.target) ||
    refs.openBurgerBtn.contains(e.target)
  ) {
    return;
  }

  toggleBurger();
});

window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
  if (!e.matches) return;
  if (!refs.burgerMenu.classList.contains('is-hidden')) {
    toggleBurger();
  }
});
