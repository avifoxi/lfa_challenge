(function() {
  var app = angular.module('libFA', ['lfa-directives', 'queryServices', 'userQfilters', 'booksServices', 'ui.router']);

  
  app.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
     .state('home', {
         url: '/home',
         templateUrl: 'app/views/home.html'
     })
     .state('books', {
         url: '/books',
         templateUrl: 'app/views/books.html',
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
 })





  app.controller('BooksCtrl', ['$http', 'librarian', '$rootScope', function($http, librarian, $rootScope){
    var library = this;
    library.books = {};
    library.librarian = librarian;

  	$rootScope.$on('librarian:books', function (event, data) {
	    library.books = data;
	    console.log(librarian.getBook('981') );
	  });


  }]);

})();


