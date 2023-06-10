// EVERYT FUNCTION RETURNS PROMISE WHEN YOU EXPORT IT. ALL COMMENTS ABOUT WHAT THEY RETURN ARE ACTUAL AFTER AWAIT OR THEN

import axios from 'axios';
async function getCategoriesList() {
  const categoriesList = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  console.log(categoriesList);
  return categoriesList;
  // categoriesList.data is arr with categories names
}

async function getTopBooks() {
  const topBooksList = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );
  console.log(topBooksList);
  return topBooksList;
  // tobBooksList.data is arr ob objects with 5 first books in category
}

async function getAllCategory(category) {
  const validCategory = category.split(' ').join('%20');
  const allCategoryBooks = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${validCategory}`
  );
  console.log(allCategoryBooks);
  return allCategoryBooks;
  //allCatagoryBooks reurrns all books of selected category
}

async function getBookById(id) {
  const idFoundedBook = await axios.get(
    `https://books-backend.p.goit.global/books/${id}`
  );
  console.log(idFoundedBook);
  return idFoundedBook;
  // idFoundedBooks are returning book that has id you set
}

export { getCategoriesList, getAllCategory, getTopBooks, getBookById };
