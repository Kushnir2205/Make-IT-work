import { getAllCategory, getTopBooks, getBookById } from './api-get.js';

const heroRefs = {
  hero: document.querySelector('.bookslist-wrapper'),
  topBooksCategoriesList: document.querySelectorAll('.category-preview-books'),
  openCategoryBtn: document.querySelectorAll('.btn-loadmore-book-wraper'),
  cat: document.querySelectorAll('.category-preview-name'),
};

async function contentLoad() {
  const resp = await getTopBooks();
  const data = resp.data;
  console.log(data);
}
contentLoad();

//creating a markup of category

async function getCategoryMarkup(category) {
  // const categ = category.ToLowerCase();
  const resp = await getAllCategory(category);
  const data = resp.data;
  // console.log(data);
  if (data.length === 0) {
    return alert('Sorry, we havenot found books in this category');
  }
  const categoryBooksMarkup = data
    .map(
      categoryBook => `<li class="book-card">
              <a
               href="https://google.com"
                 class="book-link"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <img
                   src="${categoryBook.book_image}"
                  alt="${categoryBook.title}"
                  class="book-photo"
                 />
                 <h2 class="book-name">${categoryBook.title}</h2>
                <h3 class="author-name">${categoryBook.author}</h3>
               </a>
            </li>`
    )
    .join('');

  const h1arr = category.split(' ');
  const lastWord = h1arr.splice(h1arr.length - 1, 1).join('');
  // console.log(h1arr);
  // console.log(lastWord);
  heroRefs.hero.innerHTML = `<h1 class="hero-heading">${
    h1arr.join(' ') + ' '
  }<span class="heading-painter">${lastWord}</span> </h1> <ul class="category-all-books">${categoryBooksMarkup}</ul>`;
  // console.log(categoryBooksMarkup);
}
function btnCategoryChanger(e) {
  e.preventDefault();
  if (!e.target.classList.contains('btn-loadmore')) {
    return;
  }

  const cat = e.currentTarget.previousSibling.firstElementChild.textContent;
  console.log(cat);
  getCategoryMarkup(cat);
}
heroRefs.openCategoryBtn.forEach(btn =>
  btn.addEventListener('click', btnCategoryChanger)
);
// getCategoryMarkup(e, 'Hardcover Nonfiction');

export { getCategoryMarkup };
