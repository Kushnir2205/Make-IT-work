const loader = document.querySelector('.loader-container');


export function loaderEl () {
    window.addEventListener('load', () => {
    loader.classList.add('is-hidden');
            
        loader.addEventListener('transitionend', () => {
        loader.classList.add('is-hidden');
   
    });
  }); 
}

loaderEl()

export function showLoader() {
  loader.classList.remove('is-hidden');; 

}

export function hideLoader() {
  loader.classList.add('is-hidden'); 
  //  window.scrollTo({ top: 0, behavior: 'smooth' })
}

/**
  |============================
  | loader-pop-up
  |============================
*/
// const loaderPopUp = document.querySelector('#loader-pop-up')

// export function showLoaderPopUp (event) {
//   loaderPopUp.classList.remove('is-hidden');
//   const x = event.clientX;
//   const y = event.clientY;


//   loader.style.left = `${x}px`;
//   loader.style.top = `${y}px`;

 
//   setTimeout(() => {
//     loader.classList.add('hidden');
//   }, 2000);
// }

// export function hideLoaderPopUp() {
//   loaderPopUp.classList.add('is-hidden'); 
// }




