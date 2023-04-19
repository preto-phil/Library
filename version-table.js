
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



// Library Array
let myLibrary = [];



// Book Constructor
function Book(title, author, genre, pages/* , dlt *//* , read */) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pages = pages
/*   this.dlt = dlt */
  /* this.read = read */
/*   this.read = read
  this.edit = edit
  this.dlt = dlt */
/*   this.read = read
  this.info = function() {
		return(`${title} by ${author}, ${pages} pages`)
	} */
}

// link input to title
function addToArray() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let pages = document.getElementById("pages").value;
/*   let dlt = document.createElement('button');
  dlt.className = "deleteBtn";
  dlt.innerText = "Delete"; */
  /* let read = readStatus(); */
/*   let read = document.createElement('input');
  read.type = 'checkbox';
  let edit = document.createElement('button');
  edit.className = "editBtn";
  edit.innerText = "Edit";
  let dlt = document.createElement('button');
  dlt.className = "deleteBtn";
  dlt.innerText = "Delete"; */

  let newBook = new Book(title, author, genre, pages/* , read, edit, dlt */);
  myLibrary.push(newBook);
  console.log(myLibrary);
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
  let table = document.getElementById("bookTable");
/*   let read = document.createElement('input');
  read.type = 'checkbox';
  let edit = document.createElement('button');
  let dlt = document.createElement('button');
  edit.className = "editBtn";
  dlt.className = "deleteBtn";
  edit.innerText = "Edit";
  dlt.innerText = "Delete"; */



  deleteRows();
  for (let obj of myLibrary) {
    
    let dlt = document.createElement('button');
    dlt.className = "deleteBtn";
    dlt.innerText = "Delete";
    
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellDelete = row.insertCell(4);
    
    /* let cellDelete = row.insertCell(4); */
   /*  let cellRead = row.insertCell(4);
    let cellEdit = row.insertCell(5);
    let cellDelete = row.insertCell(6); */
  
    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellDelete.append(dlt);
    /* cellDelete.append(dlt); */
    /* cellRead.append(read);
    cellEdit.append(edit);
    cellDelete.append(dlt); */
  }

}

// Function with diff calls
function callFunction() {
  if ( titleValidity === true && authorValidity === true && genreValidity === true && pagesValidity === true ) {
    addToArray();
    clearForm();
    addRow();
  }
}

// Call callFunction
addBtn[0].addEventListener("click", callFunction, function(event) {
  event.preventDefault()
});


////////////// Experimental area


// Delete table row when button clicked
function deleteSpecRow() {
  alert("Why u press me?!")
}

let dltBtn = document.getElementsByClassName("deleteBtn");
dltBtn[0].addEventListener("click", deleteSpecRow);

/*
function readStatus() {
  if (document.getElementById('read-box').checked) {

  }
} */