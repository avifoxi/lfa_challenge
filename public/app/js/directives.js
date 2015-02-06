(function(){
  var app = angular.module('lfa-directives', []);

  app.directive("bookProfile", function() {
    return {
      restrict: "E",
      templateUrl: "app/views/book-profile.html"
      // ,
      // controller: function() {
      //   // this.current = 0;
      //   // this.setCurrent = function(imageNumber){
      //   //   this.current = imageNumber || 0;
      //   // };
      // },
      // controllerAs: "profile"
    };
  });

  app.directive("searchUi", function() {
    return {
      restrict: "E",
      templateUrl: "app/views/search-ui.html",
      controller: ['$http', function($http){
        var self = this;
        self.categorySearchables = {};
        self.userSelected = {};

        $http.get('/category_searchables').success( function(d){
          self.categorySearchables = d;
          var uiPrep = angular.copy(d)
          for (prop in uiPrep){
            uiPrep[prop] = [];
          }  
          self.userSelected = uiPrep;  

        });

        self.userAddSearchable = function(filterObj){
          // var k, v = filterObj
        }

        console.log("self.categorySearchables: " + self.categorySearchables);
        console.log("self.userSelected: " + self.userSelected);
      }],
      controllerAs: 'sUi'
    }
  });
    
})();
