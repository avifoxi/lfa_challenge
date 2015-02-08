(function() {
  
  var app = angular.module('schoolServices', []);


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

  }]);

  app.controller('StudentsIndexCtrl', ['students', '$rootScope', function(students, $rootScope){
    var self = this;
    self.students = students.students;

    $rootScope.$on('students:got', function (event, data) {
      self.students = data;
    });

  }]);

  
})();

