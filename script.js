const submitBtn = document.querySelector('#submit');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pagesInput = document.querySelector('#pagesInput');
const libraryDisplay = document.querySelector('.libraryDisplay');
const plusBtn = document.querySelector('.plus');

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
    myLibrary.forEach((book, index, library) => {
        if(index === (library.length - 1)) {
            let bookDiv = document.createElement('div');
            bookDiv.classList.add('addedBooks');
            libraryDisplay.appendChild(bookDiv);
            let bookTitleDiv = document.createElement('div');
            let bookAuthorDiv = document.createElement('div');
            let bookPagesDiv = document.createElement('div');
            bookTitleDiv.classList.add('addedBooksTitle');
            bookAuthorDiv.classList.add('addedBooksTitle');
            bookPagesDiv.classList.add('addedBooksTitle');
            bookDiv.appendChild(bookTitleDiv);
            bookDiv.appendChild(bookAuthorDiv);
            bookDiv.appendChild(bookPagesDiv);
            const trash = document.createElement("img");
            trash.src = "svg/trashcan.svg";
            trash.classList.add('trash');
            bookDiv.appendChild(trash);
            bookTitleDiv.textContent = 'Title: ' + book.title;
            bookAuthorDiv.textContent = 'Author: ' + book.author;
            bookPagesDiv.textContent = 'Pages: ' + book.pages;
            
            //function to delete book from array and div
            trash.addEventListener('click', () => {
                const bookPos = myLibrary.indexOf(newBook);
                if (bookPos > -1) {
                    myLibrary.splice(bookPos, 1)
                    bookDiv.style = ('display: none;');
                    console.log(myLibrary);
                }
            })
        }
    })
}

plusBtn.addEventListener('click', () => {
    document.querySelector('.userInput').style = ('visibility: visible;')
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addBookToLibrary();
    console.log(myLibrary);
    titleInput.value = '';
    titleInput.textContent = '';
    authorInput.value = '';
    authorInput.textContent = '';
    pagesInput.value = '';
    pagesInput.textContent = '';
})

