(function() {
  var app = angular.module('libFA', ['lfa-directives']);

  app.controller('BooksCtrl', ['$http', function($http){
    var library = this;
    library.books = [];
    
    $http.get('/books').success(function(books) {
      library.books = books;
      // console.log(books);
    })
    
  }]);

})();

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
      controller: function(){

      },
      controllerAs: 'sUi'
    }
  });
    
})();

