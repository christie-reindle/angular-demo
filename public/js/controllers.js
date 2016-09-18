angular.module('myApp')
  .controller('myController', [
    '$scope',
    'mainCharacter',
    'CharacterVersionFactory',
    'BookService',
    function(
      $scope,
      mainCharacter,
      CharacterVersionFactory,
      BookService
    ) {
      $scope.myFirstName = 'Christie :D';
      $scope.myModel = 'Ready Player One';
      $scope.mainCharacter = mainCharacter;
      $scope.CharacterVersionFactory = CharacterVersionFactory;
      $scope.BookService = BookService;
      console.log(BookService.getBooks());
      console.log(BookService.getBook(2));
  }]);
