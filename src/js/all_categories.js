import { getCategoriesList } from './api-get'
import { getCategoryMarkup, contentLoad } from './book-card'
import {showLoader, hideLoader} from './loader'


const categoriesList = document.querySelector('.categories-list')
let preItemEl = null;
const titleCategories = document.querySelector('.title-categories')
if (titleCategories !== null) {
    preItemEl = titleCategories
}

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
    
    if (listItemEl.nodeName !== 'LI' && listItemEl.nodeName !== 'A') {
        return
    }

    if (preItemEl !== null) {
        preItemEl.classList.remove('title-categories')
    }
    
    listItemEl.classList.add('title-categories')
    preItemEl = listItemEl
  
  try {
    /**
      |============================
      | Додає розміку топ-книг при клуку на 'All categories'
      |============================
    */
       if (listItemEl.textContent === 'All categories') {
          
          
           showLoader()
           await contentLoad()          
           hideLoader()
           return
      
        }
    /**
      |============================
      | Додає розмітку по обраній категорії
      |============================
    */
    
      showLoader()
    await getCategoryMarkup(listItemEl.textContent);
       hideLoader()
    }
  catch (err) {
    hideLoader()
    console.log(err);
    
  }
  finally{
    hideLoader()
  }
    
}

categoriesList.addEventListener('click', onEventCategories)