(function() {
  
  var app = angular.module('customFilters', []);

  app.filter('stripDashCap', function() {
	  return function(input) {
	  	var lc = $filter('lowercase')(input);
	  	return lc.replace(/[^\w\s]/gi, ' '); 
	  };
	});

})();


