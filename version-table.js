
// Dropdown onclick visibility
function toggleFunction() {
  const targetDiv = document.getElementById("form-section");
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}

// Library Array
let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    genre: "Fantasy",
    pages: 296,
    read: true
  }
];

// Book Constructor
function Book(title, author, genre, pages, read) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pages = pages
/*   this.read = read
  this.info = function() {
		return(`${title} by ${author}, ${pages} pages`)
	} */
}

// Variable 
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
    title.classList.remove("invalidTitle");
    authorValidity = true;
  }
  
  if (genreValue == "") {
    genre.classList.add("invalidGenre");
    genreValidity = false;
  } else {
    title.classList.remove("invalidTitle");
    genreValidity = true;
  }
  
  if (pagesValue == "" || pagesValue == 0) {
    pages.classList.add("invalidPages");
    pagesValidity = false;
  } else {
    title.classList.remove("invalidTitle");
    pagesValidity = true;
  }
  console.log(titleValidity)
  console.log(authorValidity)
  console.log(genreValidity)
  console.log(pagesValidity)
}

// Call validateForm
const addBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", validateForm, function(event) {
  event.preventDefault()
});

// link input to title
function addToArray() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let pages = document.getElementById("pages").value;
  let newBook = new Book(title, author, genre, pages);
  myLibrary.push(newBook);
  console.log(myLibrary);
}


// Reset form
function clearForm() {
  document.getElementById("form").reset();
}

// Function that adds rows and cells to table
function addRow() {
  let table = document.getElementById("bookTable");
  deleteRows();
  for (let obj of myLibrary) {
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellRead = row.insertCell(4);
    let cellEdit = row.insertCell(5);
    let cellDelete = row.insertCell(6);
  
    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellRead.innerText = "TBC";
    cellEdit.innerText = "TBC";
    cellDelete.innerText = "TBC";
  }
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



////////////// Experimental area

function callFunction() {

  console.log(titleValidity)
  console.log(authorValidity)
  console.log(genreValidity)
  console.log(pagesValidity)

  const addBtn = document.getElementsByClassName("add-btn");

  // Call addToArray
  if ( titleValidity === true && authorValidity === true && genreValidity === true && pagesValidity === true ) {
    addBtn[0].addEventListener("click", addToArray, function(event) {
      event.preventDefault()
    });
    }

  // Call clearForm
  if (titleValidity === true && authorValidity === true && genreValidity === true && pagesValidity === true) {
  addBtn[0].addEventListener("click", clearForm, function(event) {
    event.preventDefault()
  });
  }

  // Call addRow
  if (titleValidity === true && authorValidity === true && genreValidity === true && pagesValidity === true) {
    addBtn[0].addEventListener("click", addRow, function(event) {
      event.preventDefault()
    });
  }
}


