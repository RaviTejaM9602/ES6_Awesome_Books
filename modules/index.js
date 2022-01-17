// import { Book } from './update.js';
import { navlists, addlists, contactlists } from './books.js';

// navs on clicks


// document.addEventListener('DOMContentLoaded', () => {
//   addBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const title = document.getElementById('title').value;
//     const author = document.getElementById('author').value;
//     const toTitleCase = (str) => str.toLowerCase().split(' ').map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(' ');
//     const id = Date.now();
//     const book = new Book(id, toTitleCase(title), toTitleCase(author));
//     book.addBook();
//     if (title && author) {
//       displayBook(book.id, book.title, book.author);
//     }
//   });
// });

bookLists.addEventListener('click', navlists);
addNewBook.addEventListener('click', addlists);
contact.addEventListener('click', contactlists);

// date
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const currentDate = new Date();
// const date = ` ${months[currentDate.getMonth()]} ${currentDate.getDate()} ${currentDate.getFullYear()}`;
// const time = currentDate.toLocaleTimeString();
// const websiteDate = document.querySelector('.date');
// websiteDate.innerHTML = `${date} ${time}`;
