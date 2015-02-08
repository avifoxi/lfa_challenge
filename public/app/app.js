(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices']);

  app.controller('BooksCtrl', ['$http', 'librarian', '$rootScope', function($http, librarian, $rootScope){
    var library = this;
    library.books = {};
    library.librarian = librarian;

  	$rootScope.$on('librarian:books', function (event, data) {
	    library.books = data;
	  });


  }]);

})();


