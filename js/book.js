// event handler on button
const loadBook = () => {
    const bookSearch = document.getElementById('book-search');
    const searchText = bookSearch.value;
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    bookSearch.value = '';

    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))

}

// display book, author, first publish year
const displayBook = books => {
    bookNumber(books.length);

    const divContainer = document.getElementById('display-book');
    divContainer.textContent = '';

    books.forEach(book => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.classList.add('mb-4')
        div.innerHTML = `
        <div class="card">
            <img  src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">Book Name: ${book.title}</h5>
                <p class="card-text">Author Name: ${book.author_name ? book.author_name : ''}</p>
                <p>First Publish: ${book.first_publish_year ? book.first_publish_year : ''}</p>
            </div>
         </div>
        `
        divContainer.appendChild(div);
    })
}

// search result status
const bookNumber = (numbers) => {
    const totalContainer = document.getElementById('number-container');
    totalContainer.classList.add('d-block');
    const totalBook = document.getElementById('total-book');

    // input validation check & results
    if (numbers === 0) {
        totalBook.innerText = 'No';
    }
    else {

        totalBook.innerText = numbers;
    }
}