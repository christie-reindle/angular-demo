angular.module('myApp', ['ngRoute'])
  .config ([
    'MoviesProvider',
    '$routeProvider',
    function(MoviesProvider, $routeProvider) {
      MoviesProvider.setEndPoint('/api/movies');

      $routeProvider
        .when('/', {
          templateUrl: 'views/default.html'
        })
        .when('/books', {
          templateUrl: 'views/books.html',
          controller: 'booksController'
        })
        .when('/movies', {
          templateUrl: 'views/movies.html',
          controller: 'movieController'
        })
        .when('/other', {
          templateUrl: 'views/other.html',
          controller: 'myController'
        });
    }
  ])
  .run([
    '$rootScope',
    'APP_VERSION',
    function($rootScope, APP_VERSION){
      $rootScope.APP_VERSION = APP_VERSION;
    }
  ]);
