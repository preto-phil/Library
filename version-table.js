
// Print array items on page load
window.onload = () => {
  let table = document.getElementById("body");

  for (let obj of myLibrary) {
    
    let dlt = document.createElement('button');
    dlt.className = "deleteBtn";
    dlt.innerText = "Delete";
    dlt.addEventListener('click', dltArrayObj)

    
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellDelete = row.insertCell(4);
  
    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
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



// Library Array
let myLibrary = [{
  title: "The Hobbit",
  author: "J.R.R Tolkien",
  genre: "Fantasy",
  pages: 296,
  read: true
}];



// Book Constructor
function Book(title, author, genre, pages) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pages = pages
  /* 
  this.read = read 
  */

}

// link input to title
function addToArray() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("genre").value;
  let pages = document.getElementById("pages").value;

/* 
  let read = readStatus(); 
*/
/* 
  let read = document.createElement('input');
  read.type = 'checkbox';
*/

  let newBook = new Book(title, author, genre, pages/* , read */);
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
  /*   
  let read = document.createElement('input');
  read.type = 'checkbox';
  let edit = document.createElement('button');
  edit.className = "editBtn";
  edit.innerText = "Edit";
*/



  deleteRows();
  for (let obj of myLibrary) {
    
    let row = table.insertRow(-1);
    let cellTitle = row.insertCell(0);
    let cellAuthor = row.insertCell(1);
    let cellGenre = row.insertCell(2);
    let cellPages = row.insertCell(3);
    let cellDelete = row.insertCell(4);
    
  /*  
    let cellRead = row.insertCell(4);
    let cellEdit = row.insertCell(5);
    let cellDelete = row.insertCell(6); 
  */
  
    let dlt = document.createElement('button');
    dlt.className = "deleteBtn";
    dlt.innerText = "Delete";
    dlt.addEventListener('click', dltArrayObj)

    cellTitle.textContent = obj.title;
    cellAuthor.innerText = obj.author;
    cellGenre.innerText = obj.genre;
    cellPages.innerText = obj.pages;
    cellDelete.append(dlt);
  /* 
    cellRead.append(read);
    cellEdit.append(edit);
  */

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

console.log(addBtn);
console.log(addBtn[0]);

let dltBtn = document.getElementsByClassName("deleteBtn");
console.log(dltBtn);
console.log(dltBtn[0])
////////////// Experimental area

/* const myTimeout = setTimeout(doThis, 2000); */

// Delete table row when button clicked
function deleteSpecRow() {
  alert("Why u press me?!");
  console.log("everything is fucked");
}
/* 
function doThis() {
  if (myLibrary.length > 0) {
    let dltBtn = document.getElementsByClassName("deleteBtn");
    console.log(dltBtn);
    console.log(dltBtn[0]);
    dltBtn[0].addEventListener("click", dltArrayObj);
  } 
}

console.log(myLibrary)

function dltArrayObj() {
  let index = myLibrary.indexOf(5);
  if (index > 1) {
    myLibrary.splice(index, 1);
    console.log(myLibrary); 
    addRow();
  }
}

const anotherTO = setTimeout(doThat, 10000);
function doThat() {
  let delBtn = document.getElementsByClassName("deleteBtn");
  delBtn[0].addEventListener("click", dltArrayObj);
}

let delBtn = document.getElementsByClassName("deleteBtn");
delBtn[0].addEventListener("click", deleteSpecRow);

 */
/*
function readStatus() {
  if (document.getElementById('read-box').checked) {

  }
} */

/* if (myLibrary.length > 0) {
  const dltBtn = document.getElementsByClassName("deleteBtn");
  console.log(dltBtn);
  console.log(dltBtn[0]);
  dltBtn[0].addEventListener("click", delete_row);
} 

function delete_row(e) {
  e.parentElement.remove();
} */

/* function deleteRow(r) {
  let i = r.parentNode.parentNode.rowIndex;
  document.getElementById('body').deleteRow(i);
} */

/* function dltRow()  {  
  let table = document.getElementById("body");  
  let rows = table.rows.length;  
  for(let i = rows - 1; i > 0; i--)  
  {  
    if(table.rows[i].cells[0].children[0].checked)  
      {  
        table.deleteRow(i);  
      }  
  }
} */

/* function dltRow(e) {
  e.parentElement.remove();
} */