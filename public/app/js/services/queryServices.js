(function() {
  
  var app = angular.module('queryServices', []);

  app.service('userQ', ['$rootScope', function ($rootScope) {
  	var self = this;
  	self.categorySearchables = {};

  	self.toggleQuery = function(category, val) {
	    var contains = _.contains( self.categorySearchables[category], val);  
	    if ( contains ){
        self.categorySearchables[category] = _.without(self.categorySearchables[category], val);
      } else{
        self.categorySearchables[category].push(val);
      }
	    $rootScope.$broadcast('userQ:updated', 'i am updated');
	  }

	}]);

	app.service('libraryQ', ['$http', 'userQ', function($http, userQ){
		var self = this;
		self.categorySearchables = {};

		$http.get('/category_searchables').success( function(d){
      self.categorySearchables = d;
      var uiPrep = angular.copy(d)
      for (prop in uiPrep){
        uiPrep[prop] = [];
      }
      userQ.categorySearchables = uiPrep;  
      
   	});

	}])

})();

