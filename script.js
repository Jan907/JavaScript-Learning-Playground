// Get access to the grid in which I want to display the books
let grid = document.querySelector(".container");

// This is my library array that stores all the books
const myLibrary = [];

// The constructor to create the books
function book(name, author, topic, pages, status) {
    this.name = name;
    this.author = author;
    this.topic = topic;
    this.pages = pages;
    this.status = status; 
}

// INSTRUCTOR INSTANCE - CREATION OF A NEW BOOK
let book1 = new book("The Hobbit", "Tolkien", 256, "not yet");


// Function adding Book to the Library
function addBookToLibrary() {
    myLibrary.push();
}



function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookcard = document.createElement("div");
        bookcard.classList.add("card");
        bookcard.style.width = "100px";
        bookcard.style.height = "200px";
        bookcard.style.padding = "12px";
        bookcard.style.backgroundColor: "#8c8c8c";
        bookcard.textContent = '${book1.name}, ${bookadd.author}, ${bookadd.topic}, ${bookadd.pages}, ${bookadd.status}';
        document.grid.appendChild(bookcard);
    }
};

// Create a button that opens a form