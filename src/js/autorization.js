const openModalBtn = document.querySelector('.button-autor');
const backDropContent = document.querySelector('.backdrop-form');
const closeBtn = document.querySelector('.closse-btn');
const registrationFormWrapper = document.querySelector('.registraion-wrapper');
const registrationLink = document.querySelector('.registration-link');
const loginFormWrapper = document.querySelector('.login-form-wrapper');
const loginLink = document.querySelector('.login-link');

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
