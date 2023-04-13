/* let myLibrary = ['a', 'b', 'c'];

function Book(title, author, pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
		return(`${title} by ${author}, ${pages} pages`)
	}
}

function addBookToLibrary() {
  // push info to array
}

// function that loops
function bookLoop() {
  for (book in myLibrary) {
    // add book info to page
    // create a div or table
    // add text content to div or table

  }
}; */

// Dropdown onclick visibility
function toggleFunction() {
  const targetDiv = document.getElementById("form-section");
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}


// Add items to list
function addBook() {
  const newLi = document.createElement("li");
  const list = document.getElementById("list");
  newLi.innerText = "Book Stuff";
  list.append(newLi);
}

// Event listener
const addBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", addBook);


// Prevent Default
function addBtnClick(event) {
  document.getElementsByClassName("add-btn");
  event.preventDefault();
}