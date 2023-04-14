
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

// function that loops over array items
function firstBookLoop() {
  myLibrary.forEach((item) => {
    const createDiv = document.createElement("div");
    const list = document.getElementById("list");
    createDiv.innerText = item;
    list.append(createDiv);
  })
};

// Call firstBookLoop
firstBookLoop();


// Book Constructor
function Book2(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.info = function() {
		return(`${title} by ${author}, ${pages} pages`)
	}
}


// Alternative and easier constructor
function Book(title) {
  this.title = title
}


// link input to title
function addToArray() {
  let inputTitle = document.getElementById("title").value;
  myLibrary.push(inputTitle);
  // instead of pushing to array push to new object 
  // push each individual property (title, author, pages)
  // then push object with all properties to array
  console.log(inputTitle); 
  console.log(myLibrary);
}

// Function that loops over array an adds div
function bookLoop() {
  const createDiv = document.createElement("div");
  const list = document.getElementById("list");
  myLibrary.forEach((item) => {
    createDiv.innerText = item;
    list.append(createDiv);
  })
};


// Call addToArray
const addBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", addToArray, function(event) {
  event.preventDefault()
});

// Call bookLoop
const addListBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", bookLoop, function(event) {
  event.preventDefault()
});

// Reset form
function clearForm() {
  document.getElementById("form").reset();
}

// Call clearForm
const addResetBtn = document.getElementsByClassName("add-btn");
addBtn[0].addEventListener("click", clearForm, function(event) {
  event.preventDefault()
});


////////////// Experimental area

myLibrary.prototype.push()