const BOOKS = [];

function render() {
    const bookList = document.getElementById("book_list");
    bookList.innerHTML = "";

    for (let index = 0; index < BOOKS.length; index++) {
        const book = BOOKS[index];
        const bookTemplate = getBookTemplate(index, book);

        bookList.innerHTML += bookTemplate;
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
    render();
}