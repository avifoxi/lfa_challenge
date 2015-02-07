(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters']);

  
 //  app.filter('makeUppercase', function () {
	//   // function that's invoked each time Angular runs $digest()
	//   // pass in `item` which is the single Object we'll manipulate
	//   return function (item) {
	//     // return the current `item`, but call `toUpperCase()` on it
	//     return item;
	//   };
	// });


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

    
	  // library.booksInQuery = function(){
	  // 	q = library.userquery;
	  // 	if ( _.isEmpty(_.flatten( _.values(q) ) ) ){
	  // 		return library.books;
	  // 	} 
	  // 	var booksToShow = [];
	  // 	var keys = _.keys(q);
	  // 	_.each(keys, function(key){
	  // 		if (     )

	  // 		console.log(key);
	  // 	});

	  // };



  }]);

})();


