(function() {
  
  var app = angular.module('userQfilters', []);


  app.filter('bookQuery', ['$rootScope', 'userQ', function ($rootScope, userQ) {
	  
	  return function (books) {
	  	
	  	var q = userQ.categorySearchables;
	  	
	  	$rootScope.$on('userQ:updated', function (event, data) {
		    q = userQ.categorySearchables;
		    // console.log('updated');
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
	  				
	  				} else if ( book.doc[key] === val ){
	  					// as is the case for title
	  					
	  					booksToShow.push(book);
	  				} else if ( book.doc[key][0].full_name){
	  					
	  					// as is the case for author

	  					_.each(book.doc[key], function(author){
	  						if (author.full_name === val.full_name ){
	  							booksToShow.push(book);
	  						}
	  					}) 

	  				}
	  			})
	  		})	      
	    });
	    return booksToShow;

	  };
	}]);



})();


