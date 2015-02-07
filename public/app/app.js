(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices']);

  app.controller('BooksCtrl', ['$http', '$scope', 'userQ', function($http, userQ, $scope){
    var library = this;
    library.books = [];
    library.userquery = userQ.categorySearchables;
    // console.log(libraryQ.categorySearchables);

    $http.get('/books').success(function(books) {
      library.books = books;
      // console.log(books);
    })

    $scope.$on('query:updated', function(event) {
	    // you could inspect the data to see if what you care about changed, or just update your own scope
	    // library.userquery = userQ.categorySearchables;
	  });
    
  }]);

})();


