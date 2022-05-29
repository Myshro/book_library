

//grab html elements

let selectElem = elem => document.querySelector(elem)

let bookTable = selectElem('#book-table')
let button = selectElem('.submit-button')
let title = selectElem('#title')
let author = selectElem('#author')
let pages = selectElem('#pages')
let read = selectElem('#read')
let deleteClickable = selectElem('.delete')

//create book objects

let aBook = new Book("fairenheit", "bradbury", 200, false)



let myLibrary = [aBook];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}


//page functionality

let counter = 0;

button.addEventListener('click', () => {

    let isValid = () => {
        return !(title.value === '' || author.value === '' || pages.value === '')
    }

    let renderBook = (book) => {
        let row = document.createElement('tr');
        row.classList.add(`row-${counter}`)

        for (let property in book) {
            let td = document.createElement('td');
            td.textContent = book[property];
            row.appendChild(td);
            bookTable.appendChild(row);
        }

        let td = document.createElement('td');
        td.textContent = 'delete';
        td.classList.add('delete')
        row.appendChild(td);
        bookTable.appendChild(row);
    }

    if (isValid()) {
        counter ++;

        let newBook = new Book(title.value, author.value, pages.value, read.value)

        myLibrary.push(newBook);
        title.value = '';
        author.value = '';
        pages.value = ''; 
        read.value = '';
        renderBook(newBook);

    }    

})

deleteClickable.addEventListener = ('click', () => {
    let deleteRow = () => {

    }
})

// function renderWholeLibrary() {

//     for (let i = 0; i < myLibrary.length; i++) {

//         let row = document.createElement('tr');
//         row.classList.add(`row-${i}`)

//         for (let property in myLibrary[i]) {
//             let td = document.createElement('td');
//             td.textContent = myLibrary[i][property];
//             row.appendChild(td);
//             bookTable.appendChild(row);
//         }

//         //adds delete grid

//         let td = document.createElement('td');
//         td.textContent = 'delete';
//         td.classList.add('delete')
//         row.appendChild(td);
//         bookTable.appendChild(row);

//     }
// }

// renderWholeLibrary()


