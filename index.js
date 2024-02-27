function fetchBooks() {
 return  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(books => renderBooks(books))
  
  // To pass the tests, don't forget to return your fetch!
  
}


function renderBooks(books) {
  const main = document.querySelector('main');

  let sum = 0;
  books.forEach(book => {
    sum += book.numberOfPages;
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  // const h1 = document.createElement('h1')
  // h1.innerHTML = 'The total number of pages of all the books: ' + sum ;
  // main.appendChild(h1)
return books
 
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// function fetchCharacters(){
//   fetch('https://anapioficeandfire.com/api/characters/1031')
//   .then(res => res.json())
//   .then(data => renderCharecters(data))
// }
// function renderCharecters(data){
//   const main = document.querySelector('main');

//   const h3 = document.createElement('h3');
//   h3.innerHTML = data.name;
//   main.appendChild(h3)

// }
