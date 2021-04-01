
    const info = () => {
        console.log({
            title, author, numberOfPages, read
        })

    }


const libraryOne = new Library();

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;

}


Library.prototype.addBook = function (title, author, numberOfPages, read) {
    const book = new Book(title, author, numberOfPages, read);
    if (title == undefined || author == undefined || numberOfPages == undefined || read == undefined) {
        throw new Error('Error! Insufficient data!')
    }
    else {
        this.books.push(book);
    }
}


Library.prototype.findBook = function (title) {

    return this.books.find(function (book) {
        return book.title === title
    })

    //for (let i in this.books) {
    //  if (this.books[i].title == title) {
    //    return this.books[i];
    //}
    //}
}

Library.prototype.removeBook = function (title) {
    this.books = this.books.filter(function (book) {
        return (book.title !== title)
    })


    //const i = this.books.findIndex(function (book) {
    //return book.title === title
    //})

    //for (let i in this.books) {
    //if (this.books[i].title == title) {
    //this.books.splice(i, 1);
    //}
    //}

}


Book.prototype.info = function () {
    let info = '';

    for (let prop in this) {
        let isOwn = this.hasOwnProperty(prop);
        if (isOwn) {
            info += (`${this[prop]}. `);
        }
    }
    return info;
}
