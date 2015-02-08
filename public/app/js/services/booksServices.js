(function() {
  
  var app = angular.module('booksServices', []);

  app.service('librarian', ['$http', '$rootScope', function ($http, $rootScope) {
    var librarian = this;
    librarian.books = {};
    
    $http.get('/books').success(function(books) {
      librarian.books = books;
      $rootScope.$broadcast('librarian:books', books);
      // console.log(books)
    })


    librarian.getBook = function(id){
      return _.find(librarian.books, function(book){ 
        return book.doc._id === id; 
      });
    }

    librarian.booksByKlass = function(klass) {
      // _.where(librarian.books, {author: "Shakespeare", year: 1611});
      var bbk = [];
      _.each(librarian.books, function(book){ 
        
        if ( _.contains(book.doc.tags, klass) ){
          bbk.push(book);
        }
      });
      return bbk;
    }

  }]);

  
})();

