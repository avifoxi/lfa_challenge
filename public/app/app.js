(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices', 'ui.router']);

  
  app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
         url: '/home',
         templateUrl: 'app/views/home.html'
     })
     .state('booksIndex', {
        url: '/books',
        templateUrl: 'app/views/books-index.html',
        controller: 'BooksCtrl'
     })
     // .state('books.page', {
     //     url: '/:id',
     //     templateUrl: 'app/views/books.page.html'
     //     // ,
     //     // controller: function($scope, $stateParams) {
     //     //     // $stateParams passes in item in url
     //     //   $scope.book = $stateParams.book;
     //     // }
     // });
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


