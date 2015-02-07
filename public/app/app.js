(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices']);

  app.controller('BooksCtrl', ['$http', 'userQ', function($http, userQ){
    var library = this;
    library.books = [];
    library.query = userQ.categoryVals;


    $http.get('/books').success(function(books) {
      library.books = books;
      // console.log(books);
    })
    
  }]);

})();


