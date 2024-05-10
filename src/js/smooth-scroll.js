document.querySelectorAll('a[href="#leave-an-application"]').forEach(anchor => {
  anchor.addEventListener('click', smoothScroll);
});

document.querySelectorAll('#anchor').forEach(anchor => {
  anchor.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = e.currentTarget.getAttribute('href');
  history.pushState(null, null, targetId);

  document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
  });
}
