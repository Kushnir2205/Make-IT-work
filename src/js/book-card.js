import { getAllCategory, getTopBooks, getBookById } from './api-get.js';

const heroRefs = {
  hero: document.querySelector('.bookslist-wrapper'),
  topBooksCategoriesList: document.querySelectorAll('.category-preview-books'),
  openCategoryBtn: null,
  cat: document.querySelectorAll('.category-preview-name'),
  catsList: document.querySelector('.categories-prewiews'),
};

async function contentLoad() {
  const resp = await getTopBooks();
  const data = resp.data;
  console.log(data);
  const homeMarkup = data
    .map(category => {
      const books = category.books.slice(0, 5); // Обмежуємо кількість книг до 5
      return (
        `<li class="cateory-preview books-list">
          <p class="category-preview-name">${category.list_name}</p>
          <ul class="category-preview-books">` +
        books
          .map(
            book =>
              `<li class="book-card prewiew">
                <a
                  href="${book.book_uri}"
                  class="book-link books-list-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <img
                    src="${book.book_image}"
                    alt="${book.title}"
                    class="book-photo books-list-img"
                    data-id ="${book._id}"
                  />
                  <h2 class="book-name">${book.title}</h2>
                  <h3 class="author-name">${book.author}</h3>
                </a>
              </li>
              `
          )
          .join('') +
        ` </ul>
         <button type="button" class="btn-loadmore">see more</button>
      </li>`
      );
    })
    .join('');
  heroRefs.catsList.classList.remove('category-all-books');
  heroRefs.catsList.classList.add('categories-prewiews', 'books-list-top');
  heroRefs.her;
  heroRefs.catsList.innerHTML = `${homeMarkup}`;
  document.querySelector('.hero-heading').innerHTML =
    '<h1 class="hero-heading">Best Sellers <span class="heading-painter">Books</span> </h1>';
  setTimeout(() => {
    heroRefs.openCategoryBtn = document.querySelectorAll('.btn-loadmore');
    heroRefs.openCategoryBtn.forEach(btn =>
      btn.addEventListener('click', btnCategoryChanger)
    );
  }, 0);
}

//contentLoad();

//creating a markup of category

async function getCategoryMarkup(category) {
  const resp = await getAllCategory(category);
  const data = resp.data;
  console.log(data);
  if (data.length === 0) {
    return alert('Sorry, we havenot found books in this category');
  }
  const categoryBooksMarkup = data
    .map(
      categoryBook => `<li class="book-card category-only">
              <a
               href="https://google.com"
                 class="book-link"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <img
                   src="${categoryBook.book_image}"
                  alt="${categoryBook.title}"
                  class="book-photo books-list-img"
                  data-id ="${categoryBook._id}"
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
  document.querySelector(
    '.hero-heading'
  ).innerHTML = `<h1 class="hero-heading">${
    h1arr.join(' ') + ' '
  }<span class="heading-painter">${lastWord}</span> </h1> `;
  heroRefs.catsList.classList.add('category-all-books');
  heroRefs.catsList.classList.remove('categories-prewiews', 'books-list-top');
  heroRefs.catsList.innerHTML = `${categoryBooksMarkup}`;

  // console.log(categoryBooksMarkup);
}

// async function btnCategoryChanger(e) {
//   console.log(2);

//   // e.preventDefault();
//   if (!e.target.classList.contains('btn-loadmore')) {
//     return;
//   }
//   const cat = e.currentTarget.parentNode.firstElementChild.textContent;
//   console.log(cat);

//   const activeTitle = document.querySelector('.title-categories');
//   activeTitle.classList.remove('title-categories');
//   const listItems = document.querySelectorAll('.item');
//   listItems.forEach(item => {
//     item.addEventListener('click', () =>
//       activeTitle.classList.remove('.title-categories')
//     );
//     if (item.firstElementChild.textContent === cat) {
//       item.classList.add('title-categories');
//     }
//   });
//   // const activeTitle = document.querySelector('.title-categories');
//   // if (
//   //   activeTitle.textContent !==
//   //   document.querySelector('.hero-heading').textContent
//   // ) {
//   // activeTitle.classList.remove('title-categories');
//   // }
//   console.log(listItems);
//   getCategoryMarkup(cat);
// }
async function btnCategoryChanger(e) {
  // Remove the class 'title-categories' from the item that has this class
  const activeTitle = document.querySelector('.title-categories');
  if (activeTitle) {
    activeTitle.classList.remove('title-categories');
  }

  if (!e.target.classList.contains('btn-loadmore')) {
    return;
  }

  const cat = e.currentTarget.parentNode.firstElementChild.textContent;
  console.log(cat);

  const listItems = document.querySelectorAll('.item');
  listItems.forEach(item => {
    item.addEventListener('click', () => {
      const activeTitle2 = document.querySelector('.title-categories');
      if (activeTitle2) {
        activeTitle2.classList.remove('title-categories');
      }
    });

    if (item.firstElementChild.textContent === cat) {
      item.classList.add('title-categories');
    }
  });

  getCategoryMarkup(cat);
}

// heroRefs.openCategoryBtn.forEach(btn =>
//   btn.addEventListener('click', btnCategoryChanger)
// );
// document;

export { getCategoryMarkup, contentLoad };
