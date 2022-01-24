import Book from './modules/book.js';
import DisplayThePage from './modules/navigation.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');

const time = DateTime.now();
document.querySelector('.time').textContent = time;
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (title === '' || author === '') {
    return null;
  }
  const book = new Book(title, author);
  Book.displayBookOnUi(book);
  Book.addBooksToLocalStorage(book);
  form.reset();
});

document.querySelector('#container').addEventListener('click', (e) => {
  Book.removeBookUi(e.target);
  Book.removeBooksFromLocalStorage(e.target.id);
});
document.addEventListener('DOMContentLoaded', Book.displayBooks());
document.addEventListener('DOMContentLoaded', DisplayThePage.pageView);
