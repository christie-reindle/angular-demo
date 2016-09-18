angular.module('myApp')
  .service('BookService', BookService);

function BookService() {
  this.value = "I am a book service!";
  this.books = [
    {
      id: 1,
      title: 'Moby Dick',
      author: 'Somebody'
    },
    {
      id: 2,
      title: 'Apple',
      author: 'Green'
    }
  ];
}

BookService.prototype.getBooks = function () {
  return this.books;
}

BookService.prototype.getBook = function (id) {
  return this.books.find((book) => book.id == id);
}