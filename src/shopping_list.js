import './js/header';
import './js/support_Ukraine';
import './js/theme-switcher.js';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import amazonSite from './images/popup/amazon.png';
import bookSite from './images/popup/book.png';
import bookShopSite from './images/popup/bookshop.png';
import sprite from './images/sprite.svg';

const booksBasket = document.querySelector('.books-basket');
const emptyList = document.querySelector('.shopping-empty');
const paginationContainer = document.querySelector('.js-tui-pagination');

const localStorageBook = JSON.parse(localStorage.getItem('bookList'));
let currentPage = 1;
let pagination;

updateBasketDisplay(currentPage);

function updateBasketDisplay(page) {
  if (localStorageBook && localStorageBook.length > 0) {
    emptyList.style.display = 'none';
    const displayedItems = getDisplayedItems(localStorageBook, page);
    createBookCards(displayedItems);
    if (localStorageBook.length > 3) {
      createPagination(localStorageBook.length, page);
    } else {
      paginationContainer.classList.add('is-hidden');
    }
  } else {
    emptyList.style.display = 'block';
    paginationContainer.classList.add('is-hidden');
  }
}

function createBookCards(bookInfo) {
  const bookCard = bookInfo
    .map(bookData => {
      const {
        author: bookAuthor,
        description: bookDesc,
        id: bookId,
        image: bookUrl,
        publisher: bookCategory,
        title: bookTitle,
        amazon: bookAmazon,
        apple: bookApple,
        shop: bookShop,
      } = bookData;
      return `<div class="shopping-book-card" data-book-id="${bookId}">  
        <img  
          src="${bookUrl}"  
          alt=""  
          width="100"  
          height="142"  
          class="shopping-card-img"  
        />  
        <div class="shopping-card-info">  
          <h3 class="shopping-title-card">${bookTitle}</h3>  
          <p class="shopping-category-card">${bookCategory}</p>  
          <p class="shopping-desc-card">${bookDesc}</p>  
          <div class="shopping-bottom-card">  
            <p class="shopping-author-card">${bookAuthor}</p>  
            <ul class="shopping-site"> 
              <li> 
                <a href="${bookAmazon}" class = "shop-shoppingList-img1" target="_blank" rel="noopener noreferrer nofollow"
                  ><img src="${amazonSite}" alt="amazon" 
                /></a> 
              </li> 
              <li> 
                <a href="${bookApple}" target="_blank" rel="noopener noreferrer nofollow"
                  ><img src="${bookSite}" alt="book site" 
                /></a> 
              </li> 
              <li> 
                <a href="${bookShop}" target="_blank" rel="noopener noreferrer nofollow"
                  ><img src="${bookShopSite}" alt="book shop site" 
                /></a> 
              </li> 
            </ul> 
          </div>  
        </div>  
       <button class="shopping-close-btn"> 
          <svg class="shopping-icon" width="28" height="28"> 
            <use href="${sprite}#icon-trash"></use> 
          </svg> 
        </button> 
      </div>`;
    })
    .join('');
  booksBasket.innerHTML = bookCard;

  const deleteBookBtn = document.querySelectorAll('.shopping-close-btn');
  deleteBookBtn.forEach(btn => {
    btn.addEventListener('click', onDeleteBook);
  });
}

function onDeleteBook() {
  const bookId = this.parentNode.dataset.bookId;
  const bookIndex = localStorageBook.findIndex(book => bookId === book.id);

  if (bookIndex !== -1) {
    localStorageBook.splice(bookIndex, 1);
    localStorage.setItem('bookList', JSON.stringify(localStorageBook));

    const newPagination = localStorageBook.length;
    const totalPages = Math.ceil(newPagination / 3);
    if (currentPage > totalPages) {
      currentPage = Math.max(1, currentPage - 1);
    }

    updateBasketDisplay(currentPage);
  }
  this.parentNode.remove();
}

function createPagination(totalItems, page) {
  const itemsPerPage = 3;

  const paginationOptions = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 3,
    page: page,
  };

  pagination = new Pagination(paginationContainer, paginationOptions);

  paginationContainer.classList.remove('is-hidden');

  pagination.on('afterMove', eventData => {
    currentPage = eventData.page;
    const displayedItems = getDisplayedItems(localStorageBook, currentPage);
    createBookCards(displayedItems);
  });
}

function getDisplayedItems(bookInfo, page) {
  const itemsPerPage = 3;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return bookInfo.slice(startIndex, endIndex);
}
