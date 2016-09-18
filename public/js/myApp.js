angular.module('myApp', [])
  .config ([
    'MoviesProvider',
    function(MoviesProvider) {
      MoviesProvider.setEndPoint('/api/movies');
    }
  ])
  .run([
    '$rootScope',
    'APP_VERSION',
    function($rootScope, APP_VERSION){
      $rootScope.APP_VERSION = APP_VERSION;
    }
  ]);
