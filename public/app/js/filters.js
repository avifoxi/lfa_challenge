console.log('loaded');

(function() {
  
  var app = angular.module('userQfilters', []);

  app.filter('qSelection', ['$rootScope', function($rootScope) {
	  return function(input){
	  	return 'balls';
	  };

	  // $rootScope.$on('userQ:updated', function (event, data) {
	  //   console.log(data);
	  // });

	}]);

})();


