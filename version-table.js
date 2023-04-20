// Library Array
let myLibrary = [{
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  genre: "Fantasy",
  pages: 296,
  read: "Read"
}];

// Print array items on page load
window.onload = () => {
  let table = document.getElementById("body");

  for (let obj of myLibrary) {
    
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellRead = row.insertCell(4);
    let cellDelete = row.insertCell(5);
 
    let rd = document.createElement('button');
    rd.className = "readBtn";
    rd.innerText = obj.read;
    rd.addEventListener('click', () => {
      if (rd.innerText == "Read") {
        rd.innerText = "Not Read";
      } else {
        rd.innerText = "Read";
      }
    });
    
    let dlt = document.createElement('button');
    dlt.className = "deleteBtn";
    dlt.innerText = "Delete";
    dlt.addEventListener('click', dltArrayObj)

    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellRead.append(rd);
    cellDelete.append(dlt);
  }
}

// Dropdown onclick visibility
function toggleFunction() {
  const targetDiv = document.getElementById("form-section");
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}

// Variable Declarations 
let titleValidity;
let authorValidity;
let genreValidity;
let pagesValidity;

// Validate form
function validateForm() {
  let title = document.getElementById("title")
  let titleValue = document.getElementById("title").value;
  let author = document.getElementById("author")
  let authorValue = document.getElementById("author").value;
  let genre = document.getElementById("genre")
  let genreValue = document.getElementById("genre").value;
  let pages = document.getElementById("pages")
  let pagesValue = document.getElementById("pages").value;
  
  if (titleValue == "") {
    title.classList.add("invalidTitle");
    titleValidity = false;
  } else {
    title.classList.remove("invalidTitle");
    titleValidity = true;
  }

  if (authorValue == "") {
    author.classList.add("invalidAuthor");
    authorValidity = false;
  } else {
    author.classList.remove("invalidAuthor");
    authorValidity = true;
  }
  
  if (genreValue == "") {
    genre.classList.add("invalidGenre");
    genreValidity = false;
  } else {
    genre.classList.remove("invalidGenre");
    genreValidity = true;
  }
  
  if (pagesValue == "" || pagesValue == 0) {
    pages.classList.add("invalidPages");
    pagesValidity = false;
  } else {
    pages.classList.remove("invalidPages");
    pagesValidity = true;
  }
}

// Call validateForm
const addBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", validateForm, function(event) {
  event.preventDefault()
});

// Reset form
function clearForm() {
  document.getElementById("form").reset();
}

// Book Constructor
function Book(title, author, genre, pages, read) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pages = pages
  this.read = read 
}

// link input to title
function addToArray() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let pages = document.getElementById("pages").value;
  let read;
  if (document.getElementById('read-box').checked == true) {
    read = "Read";
  } else {
    read = "Not Read";
  }
  console.log(read);
  
  let newBook = new Book(title, author, genre, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

// Function that removes obj from array
function dltArrayObj() {
  let index = myLibrary.indexOf(5);    
  myLibrary.splice(index, 1);
  console.log(myLibrary); 
  addRow();
}

// Function that removes existing rows
function deleteRows() {
  let tableHeaderRowCount = 1;
  let table = document.getElementById("bookTable");
  let rowCount = table.rows.length;
  for (let i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);
  }
}

// Function that adds rows and cells to table
function addRow() {
  
  let table = document.getElementById("body");

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
    rd.className = "readBtn";
    rd.innerText = obj.read;

    rd.addEventListener('click', () => {
      if (rd.innerText == "Read") {
        rd.innerText = "Not Read";
      } else {
        rd.innerText = "Read";
      }
    });

    let dlt = document.createElement('button');
    dlt.className = "deleteBtn";
    dlt.innerText = "Delete";
    dlt.addEventListener('click', dltArrayObj);

    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellRead.append(rd);
    cellDelete.append(dlt);
  }
}

// Function with diff calls
function callFunction() {
  if ( titleValidity === true && authorValidity === true && genreValidity === true && pagesValidity === true ) {
    addToArray();
    clearForm();
    addRow();
    console.log(myLibrary.length)
  }
}

// Call callFunction
addBtn[0].addEventListener("click", callFunction, function(event) {
  event.preventDefault()
});
