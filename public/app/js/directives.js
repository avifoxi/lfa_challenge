(function(){
  var app = angular.module('lfa-directives', ['queryServices']);

  app.directive("bookPartial", function() {
    return {
      restrict: "E",
      templateUrl: "app/views/book-partial.html"
    };
  });

  app.directive("searchUi", function() {
    return {
      restrict: "E",
      templateUrl: "app/views/search-ui.html",
      
      controller: ['$http', 'userQ', 'libraryQ', function($http, userQ, libraryQ){
        var self = this;
        self.libQ = libraryQ;
        self.userQ = userQ;
        
        self.toggleSearchable = function(category, val){
          userQ.toggleQuery(category, val);
        };

        self.selectedBoolean = function(category, val){
          return _.contains( userQ.categorySearchables[category], val);
        };

        self.toggleExc = function(){
          userQ.toggleExc();
        };

        self.checkExc = function(){
          return userQ.categorySearchables.exclusive;
        }

      }],
      controllerAs: 'sUi'
    }
  });
    
})();
