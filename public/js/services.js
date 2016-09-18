angular.module('myApp')
  .service('BookService', BookService);

function BookService() {
  this.value = "I am a book service!";
  this.books = [
    {
      id: 1,
      title: 'Moby Dick',
      author: 'Dolphin'
    },
    {
      id: 2,
      title: 'Dracula',
      author: 'Van Helsing'
    }
  ];
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id == id);
}

BookService.prototype.getBooks = function () {
  return this.books;
}

BookService.prototype.addBook = function (bookData) {
  const { author, title } = bookData;
  this.books.unshift({
    author,
    title
  })
}