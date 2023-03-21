let library = [];

const addBookButton = document.getElementById('addBook');

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info() {
        return name + " by " + author + ", " + pages + " pages, " + read; 
    }
}

function addBookToLibrary () {
    let name = prompt("Name of the book:");
    let author = prompt("Author:");
    let pages = prompt("Number of pages:");
    let read = prompt("Is the book read?");

    const newBook = new Book(name,author,pages,read);
    library.push(newBook);

    console.log(newBook.info());

}

addBookButton.addEventListener('click', addBookToLibrary);
