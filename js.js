/* let myLibrary = ['a', 'b', 'c'];

function Book() {
  // the constructor...

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