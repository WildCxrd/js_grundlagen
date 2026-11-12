const BOOKS = [];
const READ_BOOKS = [];

function render() {
    renderBooksList();
    renderReadBooksList();
}

function renderBooksList() {
    const bookList = document.getElementById("book_list");
    bookList.innerHTML = "";

    for (let index = 0; index < BOOKS.length; index++) {
        const book = BOOKS[index];
        const bookTemplate = getBookTemplate(index, book);

        bookList.innerHTML += bookTemplate;
    }
}

function renderReadBooksList() {
    const read_books = document.getElementById("read_books");
    read_books.innerHTML = "";

    for (let index = 0; index < READ_BOOKS.length; index++) {
        const readBook = READ_BOOKS[index];
        const readBookTemplate = getReadBookTemplate(index, readBook);

        read_books.innerHTML += readBookTemplate;
    }
}

function addToArray() {
    const input = document.getElementById("new_books");
    const trimmedText = input.value.trim();

    BOOKS.push(trimmedText);

    render();
}

function removeFromArray(index) {
    BOOKS.splice(index, 1);
    READ_BOOKS.splice(index, 1);
    render();
}

function setAsRead(index) {
    const book = BOOKS.splice(index, 1);
    READ_BOOKS.push(book);
    render();
}

function setAsUnread(index) {
    const book = READ_BOOKS.splice(index, 1);
    BOOKS.push(book);
    render();
}