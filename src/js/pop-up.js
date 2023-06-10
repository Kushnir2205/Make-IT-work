function closeModal() { // // Вибираємо елемент модального вікна та видаляємо клас 'modal-active'
    const modal = document.querySelector('.modal');
    modal.classList.remove('modal-active');
  }
  
  window.onload = () => { 
    const ulBooksList = document.querySelectorAll('.books-list'); // Вибираємо всі елементи з класами 'books-list' та 'books-list-top'
    const ulBooksListTop = document.querySelectorAll('.books-list-top');
  
  // Об'єднуємо вибрані елементи в один масив за допомогою оператора розпилення '...'
  // Додаємо обробники подій для кожного елементу книги в масиві
    [...ulBooksList, ...ulBooksListTop].map((book) => {
      book.addEventListener('click', async (event) => {
        event.preventDefault();
  
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
  
        try {
          const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
          const data = await response.json();
          
          if (data) {
            renderStats(data);
            updateButton(
              bookId,
              data.title,
              data.author,
              data.description,
              data.book_image,
              data.publisher
            );
          } else {
            console.error('The book object is empty.');
          }
        } catch (error) {
          console.error(error);
        }
      });
    });
  };
   //Ця зміна використовує оператор розпилення (...) для об'єднання ulBooksList і 
  //ulBooksListTop в один масив. Потім за допомогою методу map, 
  //ми проходимося по кожному елементу масиву і додаємо обробники подій для кожної книги.

  function renderStats(book) {
    // Створюємо URL-адреси для зображень, використовуючи об'єкт URL та import.meta.url
    let imgchop1 = new URL('/src/png', import.meta.url);
    let imgchop2 = new URL('/src/png', import.meta.url);
    let imgchop3 = new URL('/src/png', import.meta.url);
     // Формуємо HTML-контент для відображення даних книги в модальному вікні
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
                src="${imgchop1}"
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
                src="${imgchop2}"
                alt="amazon2"
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
                src="${imgchop3}"
                alt="amazon3"
                />
            </a>
          </li>
        </ul>
      </div>
      <button class="add-to-list-button">Add to Shopping List</button>`;
    // Отримуємо елемент модального вікна та встановлюємо вміст HTML
      const modalContent = document.querySelector('.modal-content');
    modalContent.innerHTML = content;
  }
  
  function updateButton(book) {
     // Вибираємо кнопку за допомогою класу
    const button = document.querySelector('.add-to-list-button');
    // Отримуємо список книг з локального сховища
    const bookList = getBookListFromLocalStorage();
     // Перевіряємо, чи книга вже є в списку
    const isBookInList = bookList.some(item => item.id === book.bookId);
   // Встановлюємо текст кнопки залежно від наявності книги в списку
    button.textContent = isBookInList ? 'Remove from Shopping List' : 'Add to Shopping List';
  
    button.addEventListener('click', () => {
      handleButtonClick(
        book.bookId,
        book.bookTitle,
        book.bookAuthor,
        book.bookDescription,
        book.bookImageUrl,
        book.bookPublisher
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
// Перевіряємо, чи книга вже є в списку
    const isBookInList = bookList.some(({ id }) => id === bookId);
// Встановлюємо текст кнопки в залежності від наявності книги в списку
    const buttonText = isBookInList ? 'Add to Shopping List' : 'Remove from Shopping List';
  
    if (isBookInList) {
      removeFromLocalStorage(bookId);
    } else {
      addToLocalStorage({
        bookId,
        bookTitle,
        bookAuthor,
        bookDescription,
        bookImage: bookImageUrl,
        bookPublisher,
      });
    }
  
    button.textContent = buttonText;
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
    const bookList = getBookListFromLocalStorage(); // Отримуємо список книг з локального сховища
// Створюємо об'єкт нової книги 
    const newBook = {
      id: bookId,
      title: bookTitle,
      author: bookAuthor,
      description: bookDescription,
      image: bookImage,
      publisher: bookPublisher,
    };
    bookList.push(newBook); // Додаємо нову книгу до списку
    localStorage.setItem('bookList', JSON.stringify(bookList));  // Зберігаємо оновлений список книг у локальному сховищі
  }
    
  function removeFromLocalStorage(bookId) {
    const bookList = getBookListFromLocalStorage(); // Отримуємо список книг з локального сховища
    const updatedList = bookList.filter(item => item.id !== bookId); // Видаляємо книгу зі списку
    localStorage.setItem('bookList', JSON.stringify(updatedList)); // Зберігаємо оновлений список книг у локальному сховищі
  }
  
  function updateShoppingListInfo() {
    const bookList = getBookListFromLocalStorage();  // Отримуємо список книг з локального сховища
    const shoppingListInfo = document.querySelector('.shopping-list-info');  // Оновлюємо інформацію про список покупок
  }
  
  const closeButton = document.querySelector('.close-mob');  // Закриття модального вікна при натисканні на кнопку закриття
  closeButton.addEventListener('click', () => {
    closeModal();
  });
  
  const modalBackground = document.querySelector('.modal'); // Закриття модального вікна при натисканні за межами вікна
  modalBackground.addEventListener('click', event => {
    if (event.target === modalBackground) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', event => { // Закриття модального вікна при натисканні Escape
    if (event.key === 'Escape') {
      closeModal();
    }
  });
