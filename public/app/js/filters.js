console.log('loaded');

(function() {
  
  var app = angular.module('userQfilters', []);


  app.filter('bookQuery', ['$rootScope', 'userQ', function ($rootScope, userQ) {
	  // function that's invoked each time Angular runs $digest()
	  // pass in `item` which is the single Object we'll manipulate
	  return function (item) {
	    // return the current `item`, but call `toUpperCase()` on it
	    $rootScope;
	    userQ;
	    return item;
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


