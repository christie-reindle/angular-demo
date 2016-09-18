angular.module('myApp')
  .filter('beforeYearFilter', function () {
    console.log(arguments);
    return function(movies, year) {
      return movies.filter(movie => movie.year < year);
    }
  })