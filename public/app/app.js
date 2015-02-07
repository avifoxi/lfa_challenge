(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters']);

  app.controller('BooksCtrl', ['$http', function($http ){
    var library = this;
    library.books = [];

    $http.get('/books').success(function(books) {
      library.books = books;
    })

  }]);

})();


