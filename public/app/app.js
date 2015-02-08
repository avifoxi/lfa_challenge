(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices', 'ui.router', 'schoolServices']);

  
  app.config([ '$stateProvider', '$urlRouterProvider',  function($stateProvider, $urlRouterProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'app/views/home.html'
      })
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
        controller: function($scope, $stateParams, students) {
          var id = Number($stateParams.id);
          $scope.student = students.getStudent(id);
        },
      });

    $urlRouterProvider.otherwise('/home');
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


