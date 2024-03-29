// Library Array
const myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R Tolkien',
    genre: 'Fantasy',
    pages: 296,
    read: 'Read',
  },
];

// Print array items on page load
window.onload = () => {
  const table = document.getElementById('body');

  for (let obj of myLibrary) {
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellRead = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    let rd = document.createElement('button');
    rd.className = 'readBtn';
    rd.innerText = obj.read;
    rd.addEventListener('click', () => {
      if (rd.innerText == 'Read') {
        rd.innerText = 'Not Read';
      } else {
        rd.innerText = 'Read';
      }
    });

    let dlt = document.createElement('button');
    dlt.className = 'deleteBtn';
    dlt.innerText = 'Delete';
    dlt.addEventListener('click', dltArrayObj);

    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellRead.append(rd);
    cellDelete.append(dlt);
  }
};

// Dropdown onclick visibility of form
  // called in index.html
function toggleFormFunction() {
  const targetDiv = document.getElementById('form-section');
  if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'block';
  } else {
    targetDiv.style.display = 'none';
  }
  if (document.getElementById('toggle').innerText === 'New Book') {
    document.getElementById('toggle').innerText = 'Close';
  } else {
    document.getElementById('toggle').innerText = 'New Book';
  }
}

// Hide list when adding book
  // called in index.html
function toggleListFunction() {
  const targetDiv = document.getElementById('bookTable'); 
  console.log(targetDiv.style.display);

  if (targetDiv.style.display === 'table') {
    targetDiv.style.display = 'none';
  } else if (targetDiv.style.display === 'none') {
    targetDiv.style.display = 'table';
  }
}

// Prevent symbols in input type number
function preventSymbols() {
  document.getElementById("pages").addEventListener("keypress", function (e) {
    if (e.which < 48 || e.which > 57)
    {
        e.preventDefault();
    }
  });
}

// Root block scope variables - used in form validation
let titleValidity;
let authorValidity;
let genreValidity;
let pagesValidity;

// Validate form
function validateForm() {
  const title = document.getElementById('title');
  const titleValue = document.getElementById('title').value;
  const author = document.getElementById('author');
  const authorValue = document.getElementById('author').value;
  const genre = document.getElementById('genre');
  const genreValue = document.getElementById('genre').value;
  const pages = document.getElementById('pages');
  const pagesValue = document.getElementById('pages').value;

  if (titleValue === '') {
    title.classList.add('invalidTitle');
    titleValidity = false;
  } else {
    title.classList.remove('invalidTitle');
    titleValidity = true;
  }

  if (authorValue === '') {
    author.classList.add('invalidAuthor');
    authorValidity = false;
  } else {
    author.classList.remove('invalidAuthor');
    authorValidity = true;
  }

  if (genreValue === '') {
    genre.classList.add('invalidGenre');
    genreValidity = false;
  } else {
    genre.classList.remove('invalidGenre');
    genreValidity = true;
  }

  if (pagesValue === '' || pagesValue === '0') {
    pages.classList.add('invalidPages');
    pagesValidity = false;
  } else {
    pages.classList.remove('invalidPages');
    pagesValidity = true;
  }
}

// Call validateForm
const addBtn = document.getElementsByClassName('add-btn');
addBtn[0].addEventListener('click', validateForm, (event) => {
  event.preventDefault();
});

// Reset form
function clearForm() {
  document.getElementById('form').reset();
}

// Book Class
class Book {
  constructor(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
  }
}

// link input to title
function addToArray() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const pages = document.getElementById('pages').value;
  let read;
  if (document.getElementById('read-box').checked == true) {
    read = 'Read';
  } else {
    read = 'Not Read';
  }

  const newBook = new Book(title, author, genre, pages, read);
  myLibrary.push(newBook);
}

// Function that removes existing rows
function deleteRows() {
  const tableHeaderRowCount = 1;
  const table = document.getElementById('bookTable');
  const rowCount = table.rows.length;
  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}

// Function that adds rows and cells to table
function addRow() {
  const table = document.getElementById('body');

  deleteRows();
  for (let obj of myLibrary) {
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellRead = row.insertCell(4);
    let cellDelete = row.insertCell(5);

    let rd = document.createElement('button');
    rd.className = 'readBtn';
    rd.innerText = obj.read;

    rd.addEventListener('click', () => {
      if (rd.innerText == 'Read') {
        rd.innerText = 'Not Read';
      } else {
        rd.innerText = 'Read';
      }
    });

    let dlt = document.createElement('button');
    dlt.className = 'deleteBtn';
    dlt.innerText = 'Delete';
    dlt.addEventListener('click', dltArrayObj);

    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellRead.append(rd);
    cellDelete.append(dlt);
  }
}

// Function that removes obj from array
function dltArrayObj() {
  const dltBtn = event.target;
  const row = dltBtn.parentNode.parentNode;
  const rowIndex = row.rowIndex - 1;
  myLibrary.splice(rowIndex, 1);
  addRow();
}

// Function with diff calls
function callFunction() {
  if (
    titleValidity === true &&
    authorValidity === true &&
    genreValidity === true &&
    pagesValidity === true
  ) {
    addToArray();
    clearForm();
    addRow();
  }
  console.log(myLibrary)
}

// Call callFunction
addBtn[0].addEventListener('click', callFunction, (event) => {
  event.preventDefault();
});
