
class Library {

    constructor(books) {
        this.books = new Array();
    }

    addBook(book) {
        this.books.push(book);
    }

    findBook(title) {
        return this.books.find(function (book) {
            return book.title === title
        })
    }

    removeBook(title) {
        this.books = this.books.filter(function (book) {
            return (book.title !== title)
        })

    }

    get showBooks() {
        return this.books;
    }

}

class Book {

    constructor(title, author, numberOfPages, read) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
    }

    get info() {
        console.log(
            this.title, this.author, this.numberOfPages, this.read
        )
    }
}


