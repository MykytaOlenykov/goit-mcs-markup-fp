document.body.addEventListener('click', e => {
  if (e.target.getAttribute('id') === 'anchor') {
    e.preventDefault();
    smoothScroll(e.target);
  }
});

function smoothScroll(elRef) {
  const targetId = elRef.getAttribute('href');
  history.pushState(null, null, targetId);

  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
  });
}
