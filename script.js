const submitBtn = document.querySelector('.submit');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pagesInput = document.querySelector('#pagesInput');
const libraryDisplay = document.querySelector('.libraryDisplay');

const myLibrary = [];

class Book{
    constructor  (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const addBookToLibrary = () => {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    const newBook =  new Book(title, author, pages);
    myLibrary.push(newBook);

    //Loop to add new divs for each new book
    myLibrary.forEach((book) => {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('addedBooks');
        libraryDisplay.appendChild(bookDiv);
        bookDiv.style = ('display: flex; flex-direction: column;');
        let bookTitleDiv = document.createElement('div');
        let bookAuthorDiv = document.createElement('div');
        let bookPagesDiv = document.createElement('div');
        bookTitleDiv.classList.add('addedBooksTitle');
        bookAuthorDiv.classList.add('addedBooksTitle');
        bookPagesDiv.classList.add('addedBooksTitle');
        bookDiv.appendChild(bookTitleDiv);
        bookDiv.appendChild(bookAuthorDiv);
        bookDiv.appendChild(bookPagesDiv);
        bookTitleDiv.textContent = 'Title: ' + book.title;
        bookAuthorDiv.textContent = 'Author: ' + book.author;
        bookPagesDiv.textContent = 'Pages: ' + book.pages;
    })
}

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
    console.log(myLibrary);
})

