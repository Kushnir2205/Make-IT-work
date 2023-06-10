import { getCategoriesList } from './api-get'

const categoriesList = document.querySelector('.categories-list')

console.log(getCategoriesList());

getCategoriesList()
    .then(({data}) => {
        const listsEl = data.map(list => {
            return `<li class="item"><a href="">${list.list_name}</a></li>`
        }).join('');
        console.log(listsEl);
        return categoriesList.innerHTML = listsEl
}

).catch(err => {console.log(err);})

// const categoriesListEl = lists => {
//     const listsEl = lists.map(list => {
//         console.log(lists);
//         return `<li class="item"><a href=""></a></li>`
//     })
// }