angular.module('myApp')
  .controller('myController', ['$scope', function($scope) {
    $scope.myFirstName = 'Christie :D';
    $scope.myModel = 'Ready Player One';
  }])
