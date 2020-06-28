
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
	.then(function(response) {
 		 return response.json();
	})
	.then(function(json){
    renderBooks(json)
})
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


//find 5th book in series

//find 1031st character in the series
// characters = []
// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => findCharacters(json));

// function findCharacters(books){books.forEach(book => {characters.push(book.characters)})};
// function find(characters, criteriaFn) {
//   for (let i = 0; i < array.length; i++) {
//     if (criteriaFn(array[i]){ === 1031}) {
//       return array[i]
//     }
//   }
// }




//find total number of pages:
// pages = []
// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => findBook(json));

// function findBook(books){books.forEach(book => {pages.push(book.numberOfPages)})};
// pages.reduce((a, b) => a + b, 0)