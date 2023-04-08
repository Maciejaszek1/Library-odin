let library = [];

const showModal = document.getElementById('addBook');
const addButton = document.getElementById('addButton');
showModal.onclick = function() {
    modal.style.display = "block";
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function info() {
        return title + " by " + author + ", " + pages + " pages, " + read; 
    }
}

function addBookToLibrary () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const postCards = document.querySelector('.cards');
    
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);

    const bookNum = library.length - 1;
    const postElement = document.createElement('div');
    
    postElement.classList.add('card');
    postElement.innerHTML = 
    `
        <h1>${library[bookNum].title}</h1>
        <h3>${library[bookNum].author}</h3>
        <p>${library[bookNum].pages}</p>
        <p>${library[bookNum].read}</p>
    `;

    postCards.appendChild(postElement);
    modal.style.display = "none";
}

addButton.addEventListener('click', addBookToLibrary);


