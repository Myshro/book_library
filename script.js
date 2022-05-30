

//grab html elements

let selectElem = elem => document.querySelector(elem)

let bookTable = selectElem('#book-table')
let button = selectElem('.submit-button')
let title = selectElem('#title')
let author = selectElem('#author')
let pages = selectElem('#pages')
let read = selectElem('#read')
let index;

let myLibrary = [];

//create book objects

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
        index = `row-${counter}`
        row.classList.add(`row-${counter}`)
        myLibrary.push(row)


        for (let property in book) {
            let td = document.createElement('td');
            if (book[property].value !== `Read` || `Unread`) {
                td.addEventListener('click', () => {
                    console.log('IM CLICKABLE')
                })
            }
            td.textContent = book[property];
            row.appendChild(td);
            bookTable.appendChild(row);
        }

        //adds delete grid

        let td = document.createElement('td');
        td.textContent = 'delete';
        td.classList.add(`delete`);
        row.appendChild(td);
        td.addEventListener('click', () => {
            function removeElem () {
                let target = document.querySelector(`.row-${counter}`)
                target.remove()
                counter--;
            }
            
            removeElem();
        });

        
        
    }

    if (isValid()) {
        counter ++;

        let newBook = new Book(title.value, author.value, pages.value, read.value)

        // myLibrary.push(newBook);
        title.value = '';
        author.value = '';
        pages.value = ''; 
        read.value = '';
        renderBook(newBook);
        read.value = `Read`;

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


