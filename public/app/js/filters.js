(function() {
  
  var app = angular.module('userQfilters', []);


  app.filter('bookQuery', ['$rootScope', 'userQ',  function ($rootScope, userQ ) {
	  
	  return function (books) {
	  	var q = userQ.categorySearchables;
	  	
	  	var filtersToRun = _.pick(q, function(oneQ){
	  		return !_.isEmpty(oneQ) 
	  	});

	  	if ( _.isEmpty(filtersToRun) ){
	  		return books;
	  	} 

	  	var booksToShow = {};
	  	var keys = _.keys(filtersToRun);

	  	var filters = {
	  		defaultq : function(key, subset, queryVals){
	  			_.each(subset, function(book){
	  				_.each(queryVals, function(val){

	  					if (_.contains( book.doc[key], val  )){
	  						booksToShow[book.id] = book;
	  					}

	  				});
	  			});
	  		}, 
	  		name : function(subset, queryVals){
	  			_.each(subset, function(book){
	  				_.each(queryVals, function(val){

	  					if ( book.doc.name === val ){
	  						booksToShow[book.id] = book;
	  					}

	  				});
	  			});
	  		},
	  		authors : function(subset, queryVals){
	  			_.each(subset, function(book){
	  				_.each(queryVals, function(val){
	  					_.each(book.doc.authors, function(author){
	  						if (author.full_name === val.full_name ){
	  							booksToShow[book.id] = book;
	  						}
	  					}) 
	  				});
	  			});
	  		}
	  	}
	  	_.each( keys, function(key, index){
	  		var subsetOfBooks;
	  		if ( index === 0 || !q.exclusive){
	  			subsetOfBooks = books;
	  		} else {
	  			subsetOfBooks = booksToShow;
	  		}

	  		switch ( key ) {
				  case "authors":				  	
				  	filters.authors( subsetOfBooks, q.authors  );	  	
				    break;
					case "name":
						filters.name( subsetOfBooks, q.name  );
						break;
					default:
						filters.defaultq( key, subsetOfBooks, q[key]  );
				}
	  	});
	  	// console.log('this is filtered books');

	  	// console.log(booksToShow);
	  	return booksToShow;
	  	
	  };
	}]);

})();


