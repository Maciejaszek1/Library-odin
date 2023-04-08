let library = [];

const addBookButton = document.getElementById('addBook');
const modal = document.getElementById("modal");

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
    // let name = prompt("Name of the book:");
    // let author = prompt("Author:");
    // let pages = prompt("Number of pages:");
    // let read = prompt("Is the book read?");
    let name = document.getElementById("title");
    let author = document.getElementById("author");
    let pages = document.getElementById("pages");
    modal.style.display = "block";
    
    const postCards = document.querySelector('.cards');

    const newBook = new Book(name,author,pages,read);
    library.push(newBook);

    console.log(newBook.info());

    const bookNum = library.length - 1;
    const postElement = document.createElement('div');
    postElement.classList.add('card');
    postElement.innerHTML = 
    `
        <h1>${library[bookNum].name}</h1>
        <h3>${library[bookNum].author}</h3>
        <p>${library[bookNum].pages}</p>
    `;

    postCards.appendChild(postElement)

}

addBookButton.addEventListener('click', addBookToLibrary);
