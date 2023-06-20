import axios from 'axios';
async function getCategoriesList() {
  const categoriesList = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );

  return categoriesList;
}

async function getTopBooks() {
  const topBooksList = await axios.get(
    'https://books-backend.p.goit.global/books/top-books'
  );

  return topBooksList;
}

async function getAllCategory(category) {
  const validCategory = category.split(' ').join('%20');
  const allCategoryBooks = await axios.get(
    `https://books-backend.p.goit.global/books/category?category=${validCategory}`
  );

  return allCategoryBooks;
}

async function getBookById(id) {
  const idFoundedBook = await axios.get(
    `https://books-backend.p.goit.global/books/${id}`
  );

  return idFoundedBook;

}

export { getCategoriesList, getAllCategory, getTopBooks, getBookById };
