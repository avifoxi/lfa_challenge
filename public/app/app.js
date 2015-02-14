(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices', 'ui.router', 'schoolServices']);

  
  app.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('books', {
        url: '/books',
        templateUrl: 'app/views/books-index.html'
      })
      .state('bookshow', {
        url: '/books/:id',
        templateUrl: 'app/views/books-show.html',
        controller: function($scope, $stateParams, librarian) {
          var id = $stateParams.id;
          $scope.book = librarian.getBook(id);
        },
        controllerAs: 'bookCtr'
      })
      .state('students', {
        url: '/students',
        templateUrl: 'app/views/students/index.html',
        controller: 'StudentsIndexCtrl',
        controllerAs: 'stuInCt'
      })
      .state('studentshow', {
        url: '/students/:id',
        templateUrl: 'app/views/students/show.html',
        controller: 'StudentShowCtrl'
      });

    $urlRouterProvider.otherwise('/books');
  }]);


  app.controller('BooksCtrl', ['$http', 'librarian', '$rootScope', 'bookQueryFilter', function($http, librarian, $rootScope, bookQueryFilter){
    var library = this;
    library.librarian = librarian;
    library.books = bookQueryFilter(librarian.books);

  	$rootScope.$on('librarian:books', function (event, data) {
	    library.books = data;
	  });
    $rootScope.$on('userQ:updated', function (event, data) {
      console.log('changed query')
      library.books = bookQueryFilter(librarian.books);
    });
  }]);

})();


