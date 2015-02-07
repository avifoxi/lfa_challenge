console.log('loaded');

(function() {
  
  var app = angular.module('userQfilters', []);


  app.filter('bookQuery', ['$rootScope', 'userQ', function ($rootScope, userQ) {
	  // function that's invoked each time Angular runs $digest()
	  // pass in `item` which is the single Object we'll manipulate
	  return function (books) {
	    // return the current `item`, but call `toUpperCase()` on it
	  	
	  	var q = userQ.categorySearchables;
	  	
	  	$rootScope.$on('userQ:updated', function (event, data) {
		    q = userQ.categorySearchables;
		    console.log('updated');
		  });

	  	if ( _.isEmpty(_.flatten( _.values(q) ) ) ){
	  		return books;
	  	} 
	  	var booksToShow = [];
	  	var keys = _.keys(q);

	  	_.each(books, function(book){
	      
	  		_.each(keys, function(key){
	  			var vals = q[key];
	  			_.each(vals, function(val){
	  				if (_.contains( book.doc[key], val  )){
	  					booksToShow.push(book);
	  				}
	  			})
	  		})	      
	    });
	    return booksToShow;
	  	// _.each(keys, function(key){
	  		

	  	// 	console.log(key);

	  	// });  

	    // $rootScope;
	    // userQ;
	    // return item;
	  };
	}]);






  // app.filter('qSelection', ['$rootScope', function($rootScope) {
	 //  return function(input){
	 //  	return 'balls';
	 //  };

	  // $rootScope.$on('userQ:updated', function (event, data) {
	  //   console.log(data);
	  // });

	// }]);

})();


