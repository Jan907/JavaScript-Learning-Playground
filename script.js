// Get access to the grid in which I want to display the books
let grid = document.querySelector(".container");
let form = document.querySelector("form");

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

// Function adding Book to the Library
function addBookToLibrary() {
    //Create new book
    let newBook = new book(name, author, topic, pages, status);
    //Add new book to array
    myLibrary.push(newBook);
    //Cycle through array and create visual dom representation
    for (let i = 0; i < myLibrary.length; i++) {
        let bookcard = document.createElement("div");
        bookcard.classList.add("card");
        bookcard.style.width = "100px";
        bookcard.style.height = "200px";
        bookcard.style.padding = "12px";
        bookcard.style.backgroundColor = "#8c8c8c";
        bookcard.textContent = '${book1.name}, ${bookadd.author}, ${bookadd.topic}, ${bookadd.pages}, ${bookadd.status}';
        //Add book to the grid
        document.grid.appendChild(bookcard);
    }
};


// Create a button that fetches form input
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading

    //Get the data
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let topic = document.getElementById("topic").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    let notread = document.getElementById("notread").value;

    //Add book to the library
    addBookToLibrary(name, author, topic, pages, read, notread);
    
});