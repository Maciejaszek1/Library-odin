let library = [];

const showModal = document.getElementById('addBook');
const addButton = document.getElementById('addButton');
let deleteButtons = document.querySelectorAll('.delete');
let readButtons = document.querySelectorAll('.readButton');

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
    let read = document.querySelector("input[name=finished]:checked").value;
    const postCards = document.querySelector('.cards');
    
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);

    const bookNum = library.length - 1;
    const postElement = document.createElement('div');

    postElement.classList.add('card');
    postElement.setAttribute('id',bookNum);
    postElement.innerHTML = 
    `
        <div class="cardHeader">
            <h1>${library[bookNum].title}</h1>
            <button class="delete">&#215</button>
        </div>
        <h3>${library[bookNum].author}</h3>
        <div class="cardFooter">
            <p>${library[bookNum].pages} pages</p>
            <button class="readButton">${library[bookNum].read}</button>
        </div>
    `;

    postCards.appendChild(postElement);
    modal.style.display = "none";

    deleteButtons = document.querySelectorAll('.delete');
    readButtons = document.querySelectorAll('.readButton');

    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteBook);
    });
    readButtons.forEach(button => {
        button.addEventListener('click', readStatus);
    });
}

function deleteBook(event) {
    const button = event.target;
    const card = button.parentNode.parentNode;
    const id = card.getAttribute('id');

    for (let i = id; i < library.length; i++) {
        const card = document.getElementById(i);
        card.setAttribute('id', i - 1);
    }

    card.parentNode.removeChild(card);
    library.splice(id, 1);
    console.log(library);
}

function readStatus(event) {
    const button = event.target;
    const card = button.parentNode.parentNode;
    const id = parseInt(card.getAttribute('id'));
    
    if (button.textContent == 'Read') {
        button.textContent = 'Unread';
        library[id].read = 'Unread';
    } else {
        button.textContent = 'Read'; 
        library[id].read = 'Read';
    }

    console.log(library[id].read);
    console.log(library);
}

addButton.addEventListener('click', addBookToLibrary);
deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBook);
});
readButtons.forEach(button => {
    button.addEventListener('click', readStatus);
});
