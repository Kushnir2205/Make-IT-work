// import {
//   getCategoriesList,
//   getAllCategory,
//   getTopBooks,
//   getBookById,
// } from './api-get.js';

// const heroRefs = {
//   topBooksCategoriesList: document.querySelector('.cateory-preview'),
// };

// async function createMarkup(tag) {
//   const resp = await getTopBooks();
//   const dataArr = resp.data;
//   // console.log(dataArr);
//   //   const booksArr = dataArr[1];
//   // dataArr.map()
//   dataArr.forEach(element => {
//     // console.log(element.list_name.map((ln = `<p>${ln}</p>`)));
//     // console.log(element.books);

//     // (element.list_name = ``),
//     const books = element.books
//       .map(
//         book =>
//           `<li class="book-card">
//           <a
//             href="https://google.com"
//             class="book-link"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="${book.book_image}"
//               alt="${book.title}"
//               class="book-photo"
//             />
//             <h2 class="book-name">'${book.title}'</h2>
//             <h3 class="author-name">'${book.author}'</h3>
//           </a></li>`
//       )
//       .join('');
//     console.log(books); //pt it in html of books list
//   });
// }
// createMarkup(1);

import {
  getCategoriesList,
  getAllCategory,
  getTopBooks,
  getBookById,
} from './api-get.js';

const heroRefs = {
  hero: document.querySelector('.bookslist-wrapper'),
  topBooksCategoriesList: document.querySelectorAll('.category-preview-books'),
  openCategoryBtn: document.querySelectorAll('.btn-loadmore'),
};

// async function createMarkup() {
//   const resp = await getTopBooks();
//   const dataArr = resp.data;
//   console.log(dataArr);
//   dataArr.forEach(element => {
//     const categoryList = document.createElement('ul');

//     const books = element.books

//       .map(
//         book =>
//           `<li class="book-card">
//               <a
//                 href="https://google.com"
//                 class="book-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src="${book.book_image}"
//                   alt="${book.title}"
//                   class="book-photo"
//                 />
//                 <h2 class="book-name">${book.title}</h2>
//                 <h3 class="author-name">${book.author}</h3>
//               </a>
//             </li>`
//       )
//       .join('');

//     categoryList.innerHTML = books;
//     heroRefs.topBooksCategoriesList.forEach(list => {
//       list.innerHTML = books;
//     });
//   });
// }

async function getCategoryMarkup(category) {
  // const categ = category.ToLowerCase();
  const resp = await getAllCategory(category);
  const data = resp.data;
  console.log(data);
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
  heroRefs.hero.innerHTML = `<h1 class="hero-heading">${category}</h1> <ul class="category-all-books">${categoryBooksMarkup}</ul>`;
  console.log(categoryBooksMarkup);
}
function btnCategoryChanger(e) {
  e.preventDefault();
  if (!e.target.classList.contains('btn-loadmore')) {
    return;
  }
  console.log(1);
  const cat = document.querySelector('.category-preview-name').textContent;
  console.log(cat);

  getCategoryMarkup(cat);
}
heroRefs.openCategoryBtn.forEach(btn =>
  btn.addEventListener('click', btnCategoryChanger)
);
// getCategoryMarkup(e, 'Hardcover Nonfiction');

export { getCategoryMarkup };
