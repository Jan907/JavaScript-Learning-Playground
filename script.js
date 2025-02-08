// Get access to the grid in which I want to display the books
let grid = document.querySelector(".libgrid");
let form = document.querySelector("form");

// This is my library array that stores all the books
let myLibrary = [];

// The constructor to create the books
function books(title, author, topic, pages, read, notread) {
    this.title = title;
    this.author = author;
    this.topic = topic;
    this.pages = pages;
    this.read = read;
    this.notread = notread; 
}

//Create new book
let book1 = new books("Hobbit", "Tolkien", "Fantasy", 200, "Read", "Notread");


// Function adding Book to the Library
function addBookToLibrary(title, author, topic, pages, read, notread) {
    //Create new book
    let newBook = new books(title, author, topic, pages, read, notread);
    //Add new book to array
    myLibrary.push(newBook);
};

 //Cycle through array and create visual dom representation
function displayBooks(title, author, topic, pages, read, notread) {
    grid.innerHTML = "";
    for (let paper of myLibrary) {
        let bookcard = document.createElement("div");
        bookcard.classList.add("card");
        bookcard.style.width = "100px";
        bookcard.style.height = "200px";
        bookcard.style.padding = "12px";
        bookcard.style.borderRadius = "8px";
        bookcard.style.backgroundColor = "#ececec";
        bookcard.textContent = `${paper.title}, ${paper.author}, ${paper.topic}, ${paper.pages}, ${paper.read}, ${paper.notread}`;
        // ADD A DELETE BUTTON HERE!!!
        
        //Add book to the grid

        grid.appendChild(bookcard);
    }
    
};


// Create a button that fetches form input
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the page from reloading

    //Get the data
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let topic = document.getElementById("topic").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let notread = document.getElementById("read").checked;

    //Add book to the library
    addBookToLibrary(title, author, topic, pages, read, notread);
    //Visualize the books
    displayBooks();
});