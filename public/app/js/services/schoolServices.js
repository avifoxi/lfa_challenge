(function() {
  
  var app = angular.module('schoolServices', ['booksServices']);


  app.service('orm', function(){

  })

  app.service('students', ['$http', '$rootScope', function ($http, $rootScope) {
    var self = this;
    // self.students = {};
    
    $http.get('/students').success(function(students) {
      self.students = students;
      $rootScope.$broadcast('students:got', students);
    });

    self.getStudent = function(id){
      return _.find(self.students, function(student){ 
        return student.id === id; 
      });
    }

    self.studentsByKlass = function(klass){
      return _.filter(self.students, function(student){
        return student.klass === klass;
      });
    }

  }]);

  app.controller('StudentsIndexCtrl', ['students', '$rootScope', function(students, $rootScope){
    var self = this;
    self.students = students.students;

    $rootScope.$on('students:got', function (event, data) {
      self.students = data;
    });

  }]);

  app.controller('StudentShowCtrl', ['$scope', '$stateParams',  'students', 'librarian', function($scope, $stateParams, students, librarian) {
    var id = Number($stateParams.id);
    $scope.student = students.getStudent(id);
    
    $scope.favorites = function(student){
      return _.map(student.favorite_books, function(id){
        var idString = id.toString();
        return librarian.getBook( idString  );
      });
    };

    $scope.klassBooks = function(){
      var klass = $scope.student.klass;
      return librarian.booksByKlass(klass);    
    };

    $scope.addToFaves = function(id){
      // console.log(id);
      if ( !_.contains($scope.student.favorite_books, id ) ){
        $scope.student.favorite_books.push(id);
        $scope.favorites();
      }
    };


    $scope.klassMates = function(){
      var klass = $scope.student.klass;
      return _.without(students.studentsByKlass(klass), $scope.student );
    };

  }]);

})();

