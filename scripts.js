class Book{
    constructor  (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.info = () => {
            info = `${this.title} by ${this.author}, ${this.pages} pages, is not available.`
            return info;
        }
    }
}

const grtExpectations = new Book('Great Expectations', 'Charles Dickens', 544);

console.log(grtExpectations.info());