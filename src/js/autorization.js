const openModalBtn = document.querySelector('.qqqqqq');
const openModalBtnMobile = document.querySelector('.popopo')
const backDropContent = document.querySelector('.backdrop-form');
const closeBtn = document.querySelector('.closse-btn');
const registrationFormWrapper = document.querySelector('.registraion-wrapper');
const registrationLink = document.querySelector('.registration-link');
const loginFormWrapper = document.querySelector('.login-form-wrapper');
const loginLink = document.querySelector('.login-link');
const mobileMenu = document.querySelector('.mobile-menu.js-menu-container');
const burgerBtn = document.querySelector('.button-burger');
const burgerCloseBtn = document.querySelector('.button-burger-close')

export function closeModal() {
  backDropContent.classList.add('invisible');
  document.removeEventListener('keydown', escapePress);
}

closeBtn.addEventListener('click', closeModal);

function onOpenModalClick(e) {
  e.preventDefault();
  backDropContent.classList.remove('invisible');
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', outsideClick);
  document.addEventListener('keydown', escapePress);
}

openModalBtn.addEventListener('click', onOpenModalClick);
openModalBtnMobile.addEventListener('click', (e) => {
  onOpenModalClick(e)
  mobileMenu.classList.remove('is-open');
  burgerBtn.classList.remove('is-hidden');
  burgerCloseBtn.classList.add('is-hidden')
});



function outsideClick(event) {
  if (event.target === backDropContent) {
    closeModal();
  }
}

function escapePress(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

loginLink.addEventListener('click', () => {
  loginFormWrapper.classList.remove('invisible');
  registrationFormWrapper.classList.add('invisible');
  loginLink.classList.add('active');
  registrationLink.classList.remove('active');
});

registrationLink.addEventListener('click', () => {
  registrationFormWrapper.classList.remove('invisible');
  loginFormWrapper.classList.add('invisible');
  registrationLink.classList.add('active');
  loginLink.classList.remove('active');
});
