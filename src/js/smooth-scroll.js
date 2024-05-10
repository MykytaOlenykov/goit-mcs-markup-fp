document.body.addEventListener('click', e => {
  const { target } = e;

  if (target.classList.contains('js-anchor')) {
    e.preventDefault();
    smoothScroll(target);
    return;
  }

  const elRef = target.closest('.js-anchor');
  if (elRef) {
    e.preventDefault();
    smoothScroll(elRef);
  }
});

function smoothScroll(elRef) {
  const targetId = elRef.getAttribute('href');
  history.pushState(null, null, targetId);

  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
  });
}
