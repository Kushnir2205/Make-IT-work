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

let userName = null;

const auth = getAuth(getApp);

onAuthStateChanged(
  auth,
  async (user) => {
    btnSingUp.style.display = 'none';
    dropDown.style.display = 'none';
    loader.style.display = 'none';

    if (user) {
      dropDown.style.display = 'block';
      const userNameEl = document.querySelector('#auth-user');

      if (userName) {
        await updateProfile(user, { displayName: userName });
        userReg = '';
        userName = '';
      }

      userNameEl.innerHTML = user.displayName;
      homeHeaderBtn.style.display = 'block';
      shoppingListBtn.style.display = 'block';

      const logOutBtn = document.querySelector('.log-out-btn');
      logOutBtn.addEventListener('click', onLogOut);
    } else {
      btnSingUp.style.display = 'block';
    }
  },
  (err) => {
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
    .catch((error) => {
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
    .catch((error) => {
      console.log(error);
    });
});

function onLogOut() {
  signOut(auth)
    .then(() => {
      const userName = document.querySelector('#auth-user');
      userName.innerHTML = '';
    
      btnSingUp.style.display = 'block';
      dropDown.style.display = 'none';
      homeHeaderBtn.style.display = 'none';
      shoppingListBtn.style.display = 'none';
    })
    .catch((error) => {
      console.log(error);
    });
}
