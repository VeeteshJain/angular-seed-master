'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl3', ['$scope', 'myService' ,function($scope,myService) {
    
    $scope.name = 'bob';
    $scope.greeting = 'Hola!';
    $scope.greeting = myService.myServiceReturn();
    $scope.todos = {'home':["one","two","three","four"]};
    $scope.tt = {"id": 1,"name": "Foo","price": 123,"tags": [ "Bar", "Eek" ],"stock": {"warehouse": 300,"retail": 20}};
    //$scope.tt = angular.fromJson(tt);
}]);