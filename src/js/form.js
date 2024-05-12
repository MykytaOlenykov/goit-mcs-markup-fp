import { toggleModal } from './common.js';
import IMask from 'imask';

const API_URL = 'https://bobrkrw.free.beeceptor.com/application';

const MESSAGES = {
  success: {
    title: "Hooray! You successfully sent your application!",
    text: "We will contact you as soon as possible",
  },
  error: {
    title: "Failed to send your application",
    text: "Please try again later",
  },
}

const refs = {
  form: document.querySelector('[data-application-form]'),
  formPhoneInput: document.querySelector('[data-phone]'),
  closeFormModalBtns: document.querySelectorAll('[data-form-result-modal-close]'),
  formModal: document.querySelector('[data-form-result-modal]'),
  formModalContent: document.querySelector('[data-form-result-modal-content]'),
  formModalTitle: document.querySelector('[data-form-result-modal-title]'),
  formModalText: document.querySelector('[data-form-result-modal-text]'),
  body: document.querySelector('body'),
};

IMask(
  refs.formPhoneInput,
  { mask: '+{380} (00) 000-00-00' }
);

const sendForm = async (data) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      showSuccessModal()
    } else {
      showErrorModal()
    }
  } catch (error) {
    showErrorModal()
  }
}

const createModal = (status) => {
  if (status) {
    refs.formModalTitle.textContent = MESSAGES[status].title;
    refs.formModalText.textContent = MESSAGES[status].text;
  }
}

const clearForm = () => {
  refs.form.reset();
}

const showSuccessModal = () => {
  createModal('success');
  toggleModal(refs.formModal);
}

const showErrorModal = () => {
  createModal('error');
  toggleModal(refs.formModal);
}

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(refs.form);
  const data = Object.fromEntries(formData.entries());
  sendForm(data);
});

refs.closeFormModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    clearForm();
    toggleModal(refs.formModal)
  });
});

// Outside click
window.addEventListener('click', e => {
  if (
    refs.formModal.classList.contains('is-hidden') ||
    refs.formModalContent.contains(e.target)
  ) {
    return;
  }

  toggleModal(refs.formModal);
});