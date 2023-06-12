(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelectorAll('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' ;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

  };

  openMenuBtn.addEventListener('click', toggleMenu);
  for (let i = 0; i < closeMenuBtn.length; i++) {
    closeMenuBtn[i].addEventListener('click', toggleMenu);
  }
  

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    

    
  });
    
  
const burgerMenu = document.querySelector(".button-burger");
const modalClose = document.querySelector(".button-burger-close");

burgerMenu.addEventListener("click", () => {
  if (burgerMenu && modalClose) {
    burgerMenu.classList.add("is-hidden");
    modalClose.classList.remove("is-hidden");
  }
});

modalClose.addEventListener("click", () => {
  if (burgerMenu && modalClose) {
    modalClose.classList.add("is-hidden");
    burgerMenu.classList.remove("is-hidden");
  }
});

})();




  