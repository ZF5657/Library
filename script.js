const submitBtn = document.querySelector('.submit')
const titleInput = document.querySelector('#titleInput')
const authorInput = document.querySelector('#authorInput')
const pagesInput = document.querySelector('#pagesInput')

const myLibrary = [];

class Book{
    constructor  (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const addBookToLibrary = () => {
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
   const newBook =  new Book(title, author, pages);
    myLibrary.push(newBook)
}

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
})