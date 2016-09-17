var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope',
  function($scope) {
    $scope.myFirstName = 'Christie:D';
  }
]);