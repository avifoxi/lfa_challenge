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
	  			// return _.uniq(bksToShow);
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
	  			// return _.uniq(bksToShow);
	  		}
	  	}
	  	_.each( keys, function(key){
	  		var matches = {};
	  		var subsetOfBooks;
	  		if (q.exclusive){
	  			subsetOfBooks = booksToShow;
	  		} else {
	  			subsetOfBooks = books;
	  		}

	  		switch ( key ) {
				  case "authors":
				  	console.log('running authors')
				  	// var matches = 
				  	filters.authors( subsetOfBooks, q.authors  );
				  	// console.log('matches by author')
				  	// console.log(matches)
				  	// booksToShow.push(matches);
				    break;
					case "name":
						// var matches = 
						filters.name( subsetOfBooks, q.name  );
						// subsetOfBooksToShow.push(matches);
						break;
					default:
						filters.defaultq( key, subsetOfBooks, q[key]  );
				}

				// check for inclusive vs exclusive search -- and 
	  	});
	  	console.log('this is filtered books');

	  	console.log(booksToShow);
	  	return booksToShow;
	  	
	  };
	}]);

})();



	  	// authors
	  	// name
	  	// tags
	  	// subjects
	  	// languages

	  	// exclusive
	  	// userText



	  	// var keys = _.keys(q);

	  	// //// this is a sore spot -- in need of refactor, too much cycling - there is a better way to watch for changes other than manual iteration, i just haven't found how to do it easily in angular yet -- but I believe its connecte to $watchCollection functionality

	  	// _.each(books, function(book){
	      
	  	// 	_.each(keys, function(key){
	  	// 		var vals = q[key];
	  			
	  	// 		_.each(vals, function(val){
	  	// 			if (_.contains( book.doc[key], val  )){
	  	// 				booksToShow.push(book);
	  				
	  	// 			} else if ( book.doc[key] === val ){
	  	// 				// as is the case for title, not an array
	  					
	  	// 				booksToShow.push(book);
	  	// 			} else if ( book.doc[key][0].full_name){
	  					
	  	// 				// as is the case for author, need to select from object property not simple array

	  	// 				_.each(book.doc[key], function(author){
	  	// 					if (author.full_name === val.full_name ){
	  	// 						booksToShow.push(book);
	  	// 					}
	  	// 				}) 

	  	// 			}
	  	// 		})
	  	// 	})	      
	   //  });
	   //  return _.uniq(booksToShow);
	    // return books;

