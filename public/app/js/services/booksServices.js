(function() {
  
  var app = angular.module('booksServices', []);

  app.service('librarian', ['$http', '$rootScope', function ($http, $rootScope) {
    var librarian = this;
    librarian.books = {};
    
    $http.get('/books').success(function(books) {
      librarian.books = books;
      $rootScope.$broadcast('librarian:books', books);
      console.log(books)
    })
  }]);

  // app.service('libraryQ', ['$http', 'userQ', function($http, userQ){
  //   var self = this;
  //   self.categorySearchables = {};

  //   $http.get('/category_searchables').success( function(d){
  //     self.categorySearchables = d;
  //     var uiPrep = angular.copy(d)
  //     for (prop in uiPrep){
  //       uiPrep[prop] = [];
  //     }
  //     userQ.categorySearchables = uiPrep;  
      
  //   });

  // }])

})();

