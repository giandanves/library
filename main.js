const Book = (title, author, numberOfPages, read) => {

    const info = () => {
        console.log({
            title, author, numberOfPages, read
        })

    }

    return { title, author, numberOfPages, read, info }

}

const Library = () => {
    let books = [];

    const addBook = book => {
        books.push(book);
    }

    const findBook = title => {
        return books.find(book => book.title === title)
    }

    const findBookIndex = title => {
        return books.findIndex(book => book.title === title)
    }

    const removeBook = title => {
        const i = findBookIndex(title);
        books.splice(i, 1);
    }

    const showBooks = () => {
        const showBook = books.slice();
        return showBook;
    }

    return { addBook, findBook, removeBook, showBooks }
}


