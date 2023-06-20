import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from 'firebase/auth';
import getApp from './firebase-config';

const btnReg = document.querySelector('.registration-form__btn');
const backDropForm = document.querySelector('.backdrop-form');
const singInBtn = document.querySelector('.login-form__btn');
const homeHeaderBtn = document.querySelector('#home-header');
const shoppingListBtn = document.querySelector('#shoplist');
const nameReg = document.querySelector('#name-reg');
const emailReg = document.querySelector('#email-reg');
const passwordReg = document.querySelector('#password-reg');
const dropDown = document.querySelector('#down-list');
const btnSingUp = document.querySelector('#sing-up');
const loader = document.querySelector('#auth-loader');
const emailAuth = document.querySelector('#email-user');
const passwordAuth = document.querySelector('#password-user');
const btnSingUpMobile = document.querySelector('.popopo');
const logOutBtnMobile = document.querySelector('.log-out-mobile');
const burgerBtn = document.querySelector('.button-burger');
const burgerCloseBtn = document.querySelector('.button-burger-close');
const mobileMenu = document.querySelector('.mobile-menu');
const homeHeaderBtnMobile = document.querySelector('#home-header-mobile');
const shoppingListBtnMobile = document.querySelector('#shoplist-mobile');

let userName = null;

const auth = getAuth(getApp);

onAuthStateChanged(
  auth,
  async user => {
    btnSingUpMobile.style.display = 'none';
    logOutBtnMobile.classList.remove('is-hidden');
    btnSingUp.style.display = 'none';
    dropDown.classList.add('user-bar-mobile');
    loader.style.display = 'none';

    if (user) {
      dropDown.classList.remove('user-bar-mobile');
      const userNameEl = document.querySelector('#auth-user');

      if (userName) {
        await updateProfile(user, { displayName: userName });
        userReg = '';
        userName = '';
      }

      userNameEl.innerHTML = user.displayName;
      homeHeaderBtn.style.display = 'block';
      shoppingListBtn.style.display = 'block';

      homeHeaderBtnMobile.style.display = 'flex';
      shoppingListBtnMobile.style.display = 'flex';

      const logOutBtn = document.querySelector('.log-out-btn');
      logOutBtn.addEventListener('click', onLogOut);
      logOutBtnMobile.addEventListener('click', e => {
        onLogOut(e);
        mobileMenu.classList.remove('is-open');
      });
    } else {
      btnSingUp.style.display = 'flex';
    }
  },
  err => {
    console.log(err);
  }
);

btnReg.addEventListener('click', () => {
  userName = nameReg.value;
  const emailValue = emailReg.value;
  const passwordValue = passwordReg.value;

  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then(() => {
      emailReg.value = '';
      passwordReg.value = '';
      backDropForm.classList.add('invisible');
    })
    .catch(error => {
      console.log(error);
    });
});

singInBtn.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, emailAuth.value, passwordAuth.value)
    .then(() => {
      emailAuth.value = '';
      passwordAuth.value = '';
      backDropForm.classList.add('invisible');
    })
    .catch(error => {
      console.log(error);
    });
});

function onLogOut() {
  signOut(auth)
    .then(() => {
      const userName = document.querySelector('#auth-user');
      userName.innerHTML = '';

      btnSingUpMobile.style.display = 'flex';
      logOutBtnMobile.classList.add('is-hidden');
      burgerBtn.classList.remove('is-hidden');
      burgerCloseBtn.classList.add('is-hidden');

      btnSingUp.style.display = 'flex';
      dropDown.classList.add('user-bar-mobile');
      homeHeaderBtn.style.display = 'none';
      shoppingListBtn.style.display = 'none';

      homeHeaderBtnMobile.style.display = 'none';
      shoppingListBtnMobile.style.display = 'none';
    })
    .then(() => {
      window.location.href = './';
    })
    .catch(error => {
      console.log(error);
    });
}
