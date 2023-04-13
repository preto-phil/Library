let myLibrary = [];

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
  myLibrary.forEach((item) => {
    let createList = document.createElement("li");
    let list = document.getElementById("list");
    createList.innerText = item;
    list.append(createList);
  })
  

};

bookLoop();

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
addBtn[0].addEventListener("click", addBook, function(event) {
  event.preventDefault()
});
