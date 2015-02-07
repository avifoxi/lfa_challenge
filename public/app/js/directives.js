(function(){
  var app = angular.module('lfa-directives', ['queryServices']);

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
      
      controller: ['$http', 'userQ', 'libraryQ', function($http, userQ, libraryQ){
        var self = this;
        self.libQ = libraryQ;
        self.userQ = userQ;
        

        self.toggleSearchable = function(category, val){
          var contains = self.selectedBoolean(category, val);
          if ( contains ){
            userQ.categorySearchables[category] = _.without(userQ.categorySearchables[category], val);
            // console.log('user has selected this shit');
          } else{
            userQ.categorySearchables[category].push(val);
            // console.log('user has NOT selected this shit');
          }
          console.log( userQ );
        };

        self.selectedBoolean = function(category, val){
          return _.contains( userQ.categorySearchables[category], val);
        };

        // console.log("self.categorySearchables: " + self.categorySearchables);
        // console.log("self.userSelected: " + self.userSelected);
      }],
      controllerAs: 'sUi'
    }
  });
    
})();
