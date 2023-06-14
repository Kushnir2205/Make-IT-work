
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  for (let i = 0; i < closeMenuBtn.length; i++) {
    closeMenuBtn[i].addEventListener('click', toggleMenu);
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', function (e) {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

  const burgerMenu = document.querySelector(".button-burger");
  const modalClose = document.querySelector(".button-burger-close");

  burgerMenu.addEventListener("click", function () {
    if (burgerMenu && modalClose) {
      burgerMenu.classList.add("is-hidden");
      modalClose.classList.remove("is-hidden");
    }
  });

  modalClose.addEventListener("click", function () {
    if (burgerMenu && modalClose) {
      modalClose.classList.add("is-hidden");
      burgerMenu.classList.remove("is-hidden");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      burgerMenu.classList.remove("is-hidden");
      modalClose.classList.add("is-hidden");
    }
  });



})();


// link
const headerLinkHome = document.querySelector(".header-link-home");
const headerLinkShoppingList = document.querySelector(".header-link");

headerLinkHome.classList.add("current");

const activateHomeLink = () => {
  headerLinkHome.classList.add("current");
  headerLinkShoppingList.classList.remove("current");
};

const activateShoppingListLink = () => {
  headerLinkShoppingList.classList.add("current");
  headerLinkHome.classList.remove("current");
};


const currentPageURL = window.location.href;


if (currentPageURL.includes("index.html")) {
  activateHomeLink();
} else if (currentPageURL.includes("shopping_list.html")) {
  activateShoppingListLink();
}

headerLinkHome.addEventListener('click', activateHomeLink);
headerLinkShoppingList.addEventListener('click', activateShoppingListLink);


// Modal-menu
const headerLinkHomeModal = document.querySelector(".header-link-home-modal");
const headerLinkShoppingListModal = document.querySelector(".header-link-shoppingcart");
const svgElement = document.querySelector(".svg-mobail");
headerLinkHomeModal.classList.add("current");

const activateHomeLinkModal = () => {
   svgElement.classList.remove("svg-mobail-color");
  headerLinkHomeModal.classList.add("current");
  headerLinkShoppingListModal.classList.remove("current");
};

const activateShoppingListLinkModal = () => {
  svgElement.classList.add("svg-mobail-color");
  headerLinkShoppingListModal.classList.add("current");
  headerLinkHomeModal.classList.remove("current");
};

const currentPagesURL = window.location.href;

if (currentPagesURL.includes("index.html")) {
  activateHomeLinkModal();
} else if (currentPagesURL.includes("shopping_list.html")) {
  activateShoppingListLinkModal();
}

headerLinkHomeModal.addEventListener('click', () => {
  activateHomeLinkModal();
  activateShoppingListLinkModal();
});

headerLinkShoppingListModal.addEventListener('click', () => {
  activateShoppingListLinkModal();
});





