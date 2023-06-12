// // Функція для закриття модального вікна
// function modalClose() {
//   // Вибираємо елемент модального вікна та видаляємо клас 'active-class'
//   const maindiv = document.querySelector('.maindiv');
//   maindiv.classList.remove('active-class');
// }
// // window.onload = () => { //Функція window.onload використовується для визначення дій, які мають відбутися, коли веб-сторінка повністю завантажена в браузері.
// // // Вибираємо всі елементи з класами 'ul-list' та 'ul-list-first'
// //       const bookUl = document.querySelectorAll('.ul-list'); // Вибираємо всі елементи з класами 'ul-list' та 'ul-list-first'
// //       const bookUlMain = document.querySelectorAll('.ul-list-first');

// //     // Об'єднуємо вибрані елементи в один масив за допомогою оператора розпилення '...'
// //     // Додаємо обробники подій для кожного елементу книги в масиві
// //       [...bookUl, ...bookUlMain].map((book) => {
// //         book.addEventListener('click', async (event) => {
// //           event.preventDefault();

// //           const maindiv = document.querySelector('.maindiv'); // Вибираємо модальне вікно
// //           const title = maindiv.querySelector('.book-title'); // Вибираємо заголовок книги
// //           const author = maindiv.querySelector('.book-author'); // Вибираємо автора книги
// //           const description = maindiv.querySelector('.book-descript'); // Вибираємо опис книги

// //           const bookLink = event.target.closest('.books-list-img');
// //           if (!bookLink) return;
// //           const bookId = bookLink.dataset.id;  // Отримуємо ідентифікатор книги з атрибуту 'data-id' елемента
// //           if (!bookId) {
// //             console.error('data-id attribute not found in a book link');
// //             return;
// //           }

// //           maindiv.classList.add('active-class'); // Додаємо клас 'active-class' для відкриття модального вікна
// //           try {
// //             // Виконуємо запит на сервер за допомогою функції fetch, отримуємо відповідь у форматі JSON
// //             const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
// //             const data = await response.json();

// //             if (data) {
// //               showInfo(data); // Відображаємо дані книги у модальному вікні
// //               updateBtn(
// //                 bookId,
// //                 data.title,
// //                 data.author,
// //                 data.description,
// //                 data.book_image,
// //                 data.publisher
// //               ); // Оновлюємо кнопку в залежності від того, чи книга знаходиться у списку покупок
// //             } else {
// //               console.error('Sorry! The book object is empty right now.');
// //             }
// //           } catch (error) {
// //             console.error(error);
// //           }
// //         });
// //       });
// //     };

// //Ця зміна використовує оператор розпилення (...) для об'єднання bookUl і
// //bookUl в один масив. Потім за допомогою методу map,
// //ми проходимося по кожному елементу масиву і додаємо обробники подій для кожної книги.

// // Функція для відображення даних книги у модальному вікні
// function showInfo(book) {
//   // Створюємо URL-адреси для зображень, використовуючи об'єкт URL та import.meta.url
//   // let imgchop1 = new URL('/src/images', import.);
//   // let imgchop2 = new URL('/src/images', import.);
//   // let imgchop3 = new URL('/src/images', import.);
//   // Формуємо HTML-контент для відображення даних книги в модальному вікні
//   const content = `
//     <div class="book-cover-container">
//       <img src="${book.book_image}" alt="${book.title}" class="book-cover">
//     </div>
//     <div class="text-div">
//       <p class="book-title">${book.title}</p>
//       <p class="book-author">Author: ${book.author}</p>
//       <p class="book-descript">${book.description}</p>
//       <ul class="buy-links-wrapper">
//         <li>
//           <a
//             class="buy-links-link"
//             target="_blank"
//             href="${book.buy_links[0].url}"
//           >
//             <img
//               src="${imgchop1}"
//               class="img-first"
//               alt="amazon"
//               />
//           </a>
//               </li>
//               <li>
//           <a
//               class="buy-links-link"
//               target="_blank"
//               href="${book.buy_links[1].url}"
//               >
//               <img
//               class="img-second"
//               src="${imgchop2}"
//               alt="book"
//               />
//           </a>
//         </li>
//         <li>
//           <a
//               class="buy-links-link"
//               target="_blank"
//               href="${book.buy_links[4].url}"
//               >
//               <img
//               class="img-third"
//               src="${imgchop3}"
//               alt="books"
//               />
//           </a>
//         </li>
//       </ul>
//     </div>
//     <button class="btn-add">Add to Shopping List</button>`;
//   // Отримуємо елемент модального вікна та встановлюємо вміст HTML
//   const modalContent = document.querySelector('.modal-content'); //вибираємо елемент на сторінці, який має клас "modal-content" і зберігає його посилання в змінній modalContent.
//   modalContent.innerHTML = content; //modalContent.innerHTML -
//   //Це властивість innerHTML обраного елемента modalContent.
//   //Вона дозволяє отримати або змінити HTML-вміст вибраного елемента.
//   //У даному випадку, коли ми звертаємося до modalContent.innerHTML,
//   //ми отримуємо HTML-вміст елемента, який знаходиться в modalContent.
// }

// // Функція для оновлення кнопки в залежності від того, чи книга знаходиться у списку покупок
// function updateBtn(
//   bookId,
//   bookTitle,
//   bookAuthor,
//   bookDescription,
//   bookImageUrl,
//   bookPublisher
// ) {
//   const button = document.querySelector('.btn-add'); // Вибираємо кнопку за допомогою класу
//   const newBook = getBookListFromLocStor(); // Отримуємо список книг з локального сховища
//   const bookInMainList = newBook.some(item => item.id === bookId);
//   // Встановлюємо текст кнопки залежно від наявності книги в списку

//   button.textContent = bookInMainList
//     ? 'Remove from Shopping List'
//     : 'Add to Shopping List';

//   button.addEventListener('click', () => {
//     pushBtn(
//       bookId,
//       bookTitle,
//       bookAuthor,
//       bookDescription,
//       bookImageUrl,
//       bookPublisher
//     );
//   });
// }

// //відповідає за обробку події натискання на кнопку.
// //Вона перевіряє, чи книга вже присутня в списку книг.
// //Якщо так, то книга видаляється зі списку і текст кнопки змінюється
// //на "Add to Shopping List" (Додати в список покупок).
// //Якщо книга не знайдена в списку, вона додається до списку і текст кнопки змінюється
// //на "Remove from Shopping List" (Видалити зі списку покупок).
// //Після цих операцій оновлюється інформація про список покупок.
// function pushBtn(
//   bookId,
//   bookTitle,
//   bookAuthor,
//   bookDescription,
//   bookImageUrl,
//   bookPublisher
// ) {
//   const button = document.querySelector('.btn-add'); // Вибираємо кнопку за допомогою класу
//   const newBook = getBookListFromLocStor(); // Отримуємо список книг з локального сховища
//   const bookInMainList = newBook.some(item => item.id === bookId); // Перевіряємо, чи книга вже є в списку

//   if (bookInMainList) {
//     removeFromLocStor(bookId); // Якщо книга вже є в списку, видаляємо її з локального сховища
//   } else {
//     addInLocStor(
//       bookId,
//       bookTitle,
//       bookAuthor,
//       bookDescription,
//       bookImageUrl,
//       bookPublisher
//     ); // Якщо книги немає в списку, додаємо її до локального сховища
//   }
//   // Змінюємо текст кнопки в залежності від наявності книги в списку
//   // Якщо книга вже присутня в списку, текст кнопки буде "Add to Shopping List" (Додати в список покупок)
//   // Якщо книги немає в списку, текст кнопки буде "Remove from Shopping List" (Видалити зі списку покупок)
//   button.textContent = bookInMainList
//     ? 'Add to Shopping List'
//     : 'Remove from Shopping List';
//   updateShopListInform(); // Оновлюємо інформацію про список покупок
// }

// // Функція для отримання списку книг з локального сховища
// function getBookListFromLocStor() {
//   // Отримуємо список книг з локального сховища
//   const newBook = localStorage.getItem('newBook'); // Отримуємо рядок зі значеннями списку книг з локального сховища
//   return newBook ? JSON.parse(newBook) : []; // Створюємо порожній масив для збереження списку книг
// }

// // Функція для додавання книги до списку покупок у локальному сховищі
// function addInLocStor(
//   bookId,
//   bookTitle,
//   bookAuthor,
//   bookDescription,
//   bookImage,
//   bookPublisher
// ) {
//   const newBook = getBookListFromLocStor(); // Отримуємо список книг з локального сховища
//   newBook.push({
//     // Додаємо нову книгу до списку
//     id: bookId,
//     title: bookTitle,
//     author: bookAuthor,
//     description: bookDescription,
//     image: bookImage,
//     publisher: bookPublisher,
//   });

//   localStorage.setItem('newBook', JSON.stringify(newBook)); // Зберігаємо оновлений список книг у локальному сховищі
// }

// function removeFromLocStor(bookId) {
//   // Функція для видалення книги зі списку покупок у локальному сховищі
//   const newBook = getBookListFromLocStor(); // Отримуємо список книг з локального сховища
//   const updatedList = newBook.filter(item => item.id !== bookId); // Фільтруємо список книг, видаляючи книгу з відповідним ідентифікатором
//   // Зберігаємо оновлений список книг у локальному сховищі
//   localStorage.setItem('newBook', JSON.stringify(updatedList));
// }

// function updateShopListInform() {
//   const newBook = getBookListFromLocStor();
//   // const shoppingListInfo = document.querySelector('.shopping-list-info');
// }

// // Закриття модального вікна при натисканні на кнопку закриття
// const closeButton = document.querySelector('.close-mod-btn');
// closeButton.addEventListener('click', () => {
//   modalClose();
// });

// // Закриття модального вікна при натисканні за межами вікна
// const modalBackground = document.querySelector('.maindiv');
// modalBackground.addEventListener('click', event => {
//   if (event.target === modalBackground) {
//     modalClose();
//   }
// });

// document.addEventListener('keydown', event => {
//   // Закриття модального вікна при натисканні Escape
//   if (event.key === 'Escape') {
//     modalClose();
//   }
// });

import { contentLoad } from "./book-card";
// import { ?????? } from "./all_categories";


function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal-active');
}

contentLoad();
// ??????????();

 const ulBooksList = document.querySelector('.categories-prewiews');
  const ulBooksListTop = document.querySelectorAll('.books-list-top');

    console.log(ulBooksList)
    
    ulBooksList.addEventListener('click', event => {
      event.preventDefault();

      console.log(event.target);

      const modal = document.querySelector('.modal');
      const title = modal.querySelector('.book-title');
      const author = modal.querySelector('.book-author');
      const description = modal.querySelector('.book-description');

      const bookLink = event.target.closest('.books-list-img');

      if (!bookLink) return;

      const bookId = bookLink.dataset.id;

      if (!bookId) {
        console.error('data-id attribute not found on the book link');
        return;
      }

      modal.classList.add('modal-active');

      fetch(`https://books-backend.p.goit.global/books/${bookId}`)
        .then(response => response.json())
        .then(data => {
          const book = data;
          // console.log(book);
          if (book) {
            renderStats(book);
            updateButton(
              bookId,
              book.title,
              book.author,
              book.description,
              book.book_image,
              book.publisher
            );
          } else {
            console.error('The book object is empty.');
          }
        })
        .catch(error => console.error(error));
    });

    ulBooksListTop.addEventListener('click', event => {
      event.preventDefault();
      
      console.log(event.target);
   
  
  
      const modal = document.querySelector('.modal');
      const title = modal.querySelector('.book-title');
      const author = modal.querySelector('.book-author');
      const description = modal.querySelector('.book-description');
  
      const bookLink = event.target.closest('.books-list-img');
      if (!bookLink) return;
      const bookId = bookLink.dataset.id;
      if (!bookId) {
        console.error('data-id attribute not found on the book link');
        return;
      }
  
      modal.classList.add('modal-active');
  
      fetch(`https://books-backend.p.goit.global/books/${bookId}`)
        .then(response => response.json())
        .then(data => {
          const book = data;
          // console.log(book);
          if (book) {
            renderStats(book);
            updateButton(
              bookId,
              book.title,
              book.author,
              book.description,
              book.book_image,
              book.publisher
            );
          } else {
            console.error('The book object is empty.');
          }
        })
        .catch(error => console.error(error));
    });
function renderStats(book) {
  // let imgchop1 = new URL('/src/images/shop1.png', import.meta.url);
  // let imgchop2 = new URL('/src/images/shop2.png', import.meta.url);
  // let imgchop3 = new URL('/src/images/shop3.png', import.meta.url);
  const content = `
    <div class="book-cover-container">
      <img src="${book.book_image}" alt="${book.title}" class="book-cover">
    </div>
    <div class="modal-text">
      <p class="book-title">${book.title}</p>
      <p class="book-author">Author: ${book.author}</p>
      <p class="book-description">${book.description}</p>
      <ul class="box-shoppingList-shop">
        <li>
          <a
            class="shop-shoppingList-link"
            target="_blank"
            href="${book.buy_links[0].url}"
          >
            <img
              src="./images/popup/amazon"
              class="shop-shoppingList-img1"
              alt="amazon"
              />
          </a>
              </li>
              <li>
          <a
              class="shop-shoppingList-link"
              target="_blank"
              href="${book.buy_links[1].url}"
              >
              <img
              class="shop-shoppingList-img2"
              src="./images/popup/book"
              alt="amazon"
              />
          </a>
        </li>
        <li>
          <a
              class="shop-shoppingList-link"
              target="_blank"
              href="${book.buy_links[4].url}"
              >
              <img
              class="shop-shoppingList-img2"
              src="./images/popup/bookshop"
              alt="amazon"
              />
          </a>
        </li>
      </ul>
    </div>
    <button class="add-to-list-button">Add to Shopping List</button>

`;
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = content;
}

function updateButton(
  bookId,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookImageUrl,
  bookPublisher
) {
  const button = document.querySelector('.add-to-list-button');
  const bookList = getBookListFromLocalStorage();
  const isBookInList = bookList.some(item => item.id === bookId);

  if (isBookInList) {
    button.textContent = 'Remove from Shopping List';
  } else {
    button.textContent = 'Add to Shopping List';
  }

  button.addEventListener('click', () => {
    handleButtonClick(
      bookId,
      bookTitle,
      bookAuthor,
      bookDescription,
      bookImageUrl,
      bookPublisher
    );
  });
}

function handleButtonClick(
  bookId,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookImageUrl,
  bookPublisher
) {
  const button = document.querySelector('.add-to-list-button');
  const bookList = getBookListFromLocalStorage();
  const isBookInList = bookList.some(item => item.id === bookId);

  if (isBookInList) {
    removeFromLocalStorage(bookId);
    button.textContent = 'Add to Shopping List';
  } else {
    addToLocalStorage(
      bookId,
      bookTitle,
      bookAuthor,
      bookDescription,
      bookImageUrl,
      bookPublisher
    );

    button.textContent = 'Remove from Shopping List';
  }

  updateShoppingListInfo();
}

function getBookListFromLocalStorage() {
  const bookList = localStorage.getItem('bookList');
  return bookList ? JSON.parse(bookList) : [];
}

function addToLocalStorage(
  bookId,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookImage,
  bookPublisher
) {
  const bookList = getBookListFromLocalStorage();
  bookList.push({
    id: bookId,
    title: bookTitle,
    author: bookAuthor,
    description: bookDescription,
    image: bookImage,
    publisher: bookPublisher,
  });
  localStorage.setItem('bookList', JSON.stringify(bookList));
}

function removeFromLocalStorage(bookId) {
  const bookList = getBookListFromLocalStorage();
  const updatedList = bookList.filter(item => item.id !== bookId);
  localStorage.setItem('bookList', JSON.stringify(updatedList));
}

function updateShoppingListInfo() {
  const bookList = getBookListFromLocalStorage();
  const shoppingListInfo = document.querySelector('.shopping-list-info');
  // shoppingListInfo.textContent = `Shopping List (${bookList.length} books)`;
}

// Закриття модального вікна при натисканні на кнопку закриття
const closeButton = document.querySelector('.close-mob');
closeButton.addEventListener('click', () => {
  closeModal();
});

// Закриття модального вікна при натисканні за межами вікна
const modalBackground = document.querySelector('.modal');
modalBackground.addEventListener('click', event => {
  if (event.target === modalBackground) {
    closeModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
