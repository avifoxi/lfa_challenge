(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices']);

  app.controller('BooksCtrl', ['$http', '$rootScope', 'userQ', function($http, $rootScope, userQ){
    var library = this;
    library.books = [];
    library.userquery = userQ.categorySearchables;

    $http.get('/books').success(function(books) {
      library.books = books;
    })

	  $rootScope.$on('userQ:updated', function (event, data) {
	    library.userquery = userQ.categorySearchables;
	  });

    
	  library.booksInQuery = function(){
	  	q = library.userquery;
	  	if ( _.isEmpty(_.flatten( _.values(q) ) ) ){
	  		return library.books;
	  	} 
	  	var booksToShow = [];
	  	var keys = _.keys(q);
	  	_.each(keys, function(key){
	  		if (     )

	  		console.log(key);
	  	});

	  };



  }]);

})();


