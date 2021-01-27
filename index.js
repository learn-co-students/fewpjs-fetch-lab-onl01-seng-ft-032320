function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(books => renderBooks(books))
}

function renderBooks(books) {
  let main = document.querySelector('main');
  books.forEach(book => {
    let h3 = document.createElement('h3')
    h3.innerHTML = book.name
    main.appendChild(h3)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
