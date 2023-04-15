let library = [];

const showModal = document.getElementById('addBook');
const addButton = document.getElementById('addButton');
let deleteButtons = document.querySelectorAll('.delete');

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
    postElement.setAttribute('id',bookNum);
    postElement.innerHTML = 
    `
        <div class="cardHeader">
            <h1>${library[bookNum].title}</h1>
            <button class="delete">&#215</button>
        </div>
        <h3>${library[bookNum].author}</h3>
        <p>${library[bookNum].pages} pages</p>
    `;

    postCards.appendChild(postElement);
    modal.style.display = "none";
    console.log(library);
    console.log(deleteButtons);
    deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteBook);
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

deleteButtons.forEach(button => {
    button.addEventListener('click', deleteBook);
});
addButton.addEventListener('click', addBookToLibrary);
