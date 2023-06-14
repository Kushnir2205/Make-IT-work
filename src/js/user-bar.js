const userBarBtn = document.querySelector('.js-user-bar-btn');
const logOutBtn = document.querySelector('.js-log-out-btn');
const dropdown = document.querySelector('.dropdown');
const downList = document.querySelector('#down-list')
console.log(userBarBtn);
console.log(dropdown);

function toggleDropdown() {
    console.log(123);
    // dropdown.style.display = 'flex'
  dropdown.classList.toggle('visible-dropdown');
}

downList.addEventListener('click', toggleDropdown);

