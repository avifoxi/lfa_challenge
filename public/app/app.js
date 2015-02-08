(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices', 'ui.router']);

  
  app.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'app/views/home.html'
      })
      .state('books', {
        url: '/books',
        templateUrl: 'app/views/books-index.html',
        controllerAsoller: 'BooksCtrl'
      })
      .state('bookshow', {
        url: '/books/:id',
        templateUrl: 'app/views/books-show.html',
        controller: function($scope, $stateParams, librarian) {
            // $stateParams passes in item in url
          var id = $stateParams.id;
          $scope.book = librarian.getBook(id);
        },
        controllerAs: 'bookCtr'
      });
    // $urlRouterProvider.otherwise('/home');
  }]);





  app.controller('BooksCtrl', ['$http', 'librarian', '$rootScope', function($http, librarian, $rootScope){
    var library = this;
    library.librarian = librarian;
    library.books = librarian.books;

  	$rootScope.$on('librarian:books', function (event, data) {
	    library.books = data;
	  });


  }]);

})();


