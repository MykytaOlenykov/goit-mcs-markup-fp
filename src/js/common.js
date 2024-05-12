const animationDuration = 250;

const body = document.querySelector('body');

const handleZIndex = (modalSelector) => {
  if (modalSelector.style.zIndex === '100') {
    setTimeout(() => {
      modalSelector.style.zIndex = '-1';
    }, animationDuration);
  } else {
    modalSelector.style.zIndex = '100';
  }
};

const handleBodyOverflow = (modalSelector) => {
  if (modalSelector.classList.contains('is-hidden')) {
    body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'hidden';
  }
};

export const toggleModal = (modalSelector) => {
  modalSelector.classList.toggle('is-hidden');

  handleBodyOverflow(modalSelector);
  handleZIndex(modalSelector);
};