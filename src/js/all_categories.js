import { getCategoriesList } from './api-get'
import {getCategoryMarkup} from './book-card'

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
      
    await getCategoryMarkup(listItemEl.textContent);

    
    }
    catch (err) {
      console.log(err);
    }
    
    // console.log(data);
    // return getCategoryMarkup(data)

}

categoriesList.addEventListener('click', onEventCategories)