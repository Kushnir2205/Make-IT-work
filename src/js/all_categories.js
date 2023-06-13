import { getCategoriesList } from './api-get'
import {getCategoryMarkup, contentLoad} from './book-card'

// const categories = document.querySelector('.categories')
// const itemEl = document.querySelector('.item')
const categoriesList = document.querySelector('.categories-list')
let preItemEl = null;
const titleCategories = document.querySelector('.title-categories')
if (titleCategories !== null) {
    preItemEl = titleCategories
}

// console.log(getCategoriesList());

// getCategoriesList()
//     .then(({data}) => {
//         const listsEl = data.map(list => {
//             return `<li class="item"><a href="">${list.list_name}</a></li>`
//         }).join('');
//         console.log(listsEl);
//         return categoriesList.innerHTML = listsEl
// }

// ).catch(err => {console.log(err);})

/**
  |============================
  | Створє шаблонну розмітку
  |============================
*/

const createList  = lists => {
    const listsEl = lists.map(list => {
            return `<li class="item"><a href="">${list.list_name}</a></li>`
        })
       
        return listsEl.join('')
};

/**
  |============================
  | перебирає проміс і додає розмітку
  |============================
*/

const categoriesListEl = async () => {
    const {data} = await getCategoriesList()
        return categoriesList.insertAdjacentHTML ('beforeend', createList(data))

}

categoriesListEl()

/**
  |============================
  | подія по кліку (вибір категорії)
  |============================
*/
const onEventCategories = async (event) => {
    event.preventDefault()
    const listItemEl = event.target
    // console.log(listItemEl);
    if (listItemEl.nodeName !== 'LI' && listItemEl.nodeName !== 'A') {
        return
    }

    if (preItemEl !== null) {
        preItemEl.classList.remove('title-categories')
    }
    // console.dir(event.target);
    listItemEl.classList.add('title-categories')
    preItemEl = listItemEl
  
  try {
    /**
      |============================
      | Додає розміку топ-книг при клуку на 'All categories'
      |============================
    */
       if (listItemEl.textContent === 'All categories') {

          await contentLoad()
           return
      
        }
    /**
      |============================
      | Додає розмітку по обраній категорії
      |============================
    */
      
       await getCategoryMarkup(listItemEl.textContent);
    /**
      |============================
      | додає модалку при виборі книги
      |============================
    */
    // const categoryAllBooksEl = document.querySelector('category-all-books')
    
    //     categoryAllBooksEl?.addEventListener?.('click', event => {
    //     event.preventDefault();

    //     console.log(event.target);

    //     const modal = document.querySelector('.modal');
    //     const title = modal.querySelector('.book-title');
    //     const author = modal.querySelector('.book-author');
    //     const description = modal.querySelector('.book-description');

    //     const bookLink = event.target.closest('.books-list-img');
    //     if (!bookLink) return;
    //     const bookId = bookLink.dataset.id;
    //     if (!bookId) {
    //       console.error('data-id attribute not found on the book link');
    //       return;
    //     }

    //     modal.classList.add('modal-active');

    //     fetch(`https://books-backend.p.goit.global/books/${bookId}`)
    //       .then(response => response.json())
    //       .then(data => {
    //         const book = data;
    //         // console.log(book);
    //         if (book) {
    //           renderStats(book);
    //           updateButton(
    //             bookId,
    //             book.title,
    //             book.author,
    //             book.description,
    //             book.book_image,
    //             book.publisher
    //           );
    //         } else {
    //           console.error('The book object is empty.');
    //         }
    //       })
    //       .catch(error => console.error(error));
    //   });

    
    }
    catch (err) {
      console.log(err);
    }
    
    // console.log(data);
    // return getCategoryMarkup(data)

}

categoriesList.addEventListener('click', onEventCategories)