const submitBtn = document.querySelector('#submit');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const pagesInput = document.querySelector('#pagesInput');
const libraryDisplay = document.querySelector('.libraryDisplay');
const plusBtn = document.querySelector('.plus');
const readRadio = document.querySelector('#read');

const myLibrary = [];

class Book{
    constructor  (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const addBookToLibrary = () => {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = '';
    if(readRadio.checked == true) {
        read = true
    } else {
        read = false
    };
    const newBook =  new Book(title, author, pages, read);
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
            bookTitleDiv.textContent = 'Title: ' + book.title;
            bookAuthorDiv.textContent = 'Author: ' + book.author;
            bookPagesDiv.textContent = 'Pages: ' + book.pages;
            let readBtn = document.createElement("button");
            readBtn.classList.add('readBtn');
            let toggleRead = '';
            if(readRadio.checked == true) {
                readBtn.textContent = 'Read'
                toggleRead = true
            } else {
                readBtn.textContent = 'Not Read'
                toggleRead = false
            };
            readBtn.addEventListener('click', () => {
                if(toggleRead == true) {
                    readBtn.textContent = 'Not Read'
                    toggleRead = false
                    book.read = false
                    console.log(myLibrary)
                } else {
                    readBtn.textContent = 'Read'
                    toggleRead = true
                    book.read = true
                    console.log(myLibrary)
                }
            });
            bookDiv.appendChild(readBtn);
            const trash = document.createElement("img");
            trash.src = "svg/trashcan.svg";
            trash.classList.add('trash');
            bookDiv.appendChild(trash);
            
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
};

plusBtn.addEventListener('click', () => {
    document.querySelector('.userInput').style = ('display: flex;')
});

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
    document.querySelector('.userInput').style = ('display: none;');
});

