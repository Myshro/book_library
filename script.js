
let bookTable = document.getElementById('book-table')

let aBook = new Book("fairenheit", "bradbury", 200, false)
let bBook = new Book("c", "d", 2, true)

let myLibrary = [aBook, bBook];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


let addBookToLibrary = () => {



    for (let i = 0; i < myLibrary.length; i++) {

        let row = document.createElement('tr');

        for (let property in myLibrary[i]) {
            let td = document.createElement('td');
            td.textContent = myLibrary[i][property];
            row.appendChild(td);
            bookTable.appendChild(row);
        }

        let td = document.createElement('td');
        td.textContent = 'delete';
        row.appendChild(td);
        bookTable.appendChild(row);

    }
}

addBookToLibrary()


