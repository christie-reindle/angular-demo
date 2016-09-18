angular.module('myApp')
  .controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter) {
    $scope.myFirstName = 'Christie :D';
    $scope.myModel = 'Ready Player One';
    $scope.mainCharacter = mainCharacter;
  }])
