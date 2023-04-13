let myLibrary = [];

/* // Book Constructor
function Book(title, author, pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
		return(`${title} by ${author}, ${pages} pages`)
	}
}
 */


// Alternative and easier constructor
function Book(title) {
  this.title = title
}

/* // Function that pushes to array
function addBookToLibrary() {
  // push info to array
  const bookTitle = new Book(prompt("Title? ")) 
  myLibrary.push(bookTitle.title);
} */

/* addBookToLibrary(); */

// Dropdown onclick visibility
function toggleFunction() {
  const targetDiv = document.getElementById("form-section");
  if (targetDiv.style.display === "none") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}

// Event listener
const addBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", makeArray, function(event) {
  event.preventDefault()
});


// link input to title
function makeArray() {
  let inputTitle = document.getElementById("title").value;
  myLibrary.push(inputTitle); 
  console.log(inputTitle); 
  console.log(myLibrary);
}

/* // function that loops over array items
function bookLoop() {
  myLibrary.forEach((item) => {
    let createList = document.createElement("li");
    let list = document.getElementById("list");
    createList.innerText = item;
    list.append(createList);
  })
}; */

function bookLoop() {
  
  for (item in myLibrary) {
    let createList = document.createElement("li");
    let list = document.getElementById("list");
    createList.innerText = item;
    list.append(createList);
  }
};

