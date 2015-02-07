(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices']);

  app.controller('BooksCtrl', ['$http', 'userQ', '$rootScope', function($http, userQ, $rootScope){
    var library = this;
    library.books = [];
    library.userquery = userQ.categorySearchables;
    // console.log(libraryQ.categorySearchables);

    $http.get('/books').success(function(books) {
      library.books = books;
      // console.log(books);
    })

    console.log('$rootScope from app parent');
	  console.log($rootScope.categorySearchables);

	  $rootScope.$on('userQ:updated', function (event, data) {
	    alert(data); // 'Broadcast!'
	  });

   //  $rootScope.$on('rootScope:emit', function(event, data) {
   //  	alert(data);
	  //   // you could inspect the data to see if what you care about changed, or just update your own scope
	  //   // library.userquery = userQ.categorySearchables;
	  // });
    
  }]);

})();


