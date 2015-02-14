(function() {
  
  var app = angular.module('userQfilters', []);


  app.filter('bookQuery', ['$rootScope', 'userQ',  function ($rootScope, userQ ) {
	  
	  return function (books) {
	  	var q = userQ.categorySearchables;
	  	
	  	console.log(q);

	  	var filtersToRun = _.filter( [q.authors, q.name, q.tags, q.subjects, q.languages, q.userText], function(oneQ){
	  		return !_.isEmpty(oneQ)
	  	});

	  	console.log(filtersToRun)
	  	if ( _.isEmpty(filtersToRun) ){
	  		return books;
	  	} 
	  	// var filtersToRun = _.filter(  );
	  	var booksToShow = [];
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

