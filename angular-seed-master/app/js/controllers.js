'use strict';

/* Controllers */

angular.module('myApp.controllers', ['serverDataAccessService',"myService"]).
  controller('MyCtrl1', ['$scope',function($scope) {
    $scope.data = ['A','1','B','2','C','3','D','4','E','5','F','6','G','7'];
    $scope.colors = ['black','white','red','blue','yellow'];
    $scope.testJquery  = function(){
      var html = '<h1>hello world!</h1>';
      var el = angular.element( document.querySelector(".testJquery") );
      console.log(el.text());
      console.log("yep testJquery called");
    };

  }])
  .controller('MyCtrl2', ['$scope',"serverDataAccessService",function($scope,serverDataAccessService) {
    // $scope.name = 'bob';
    $scope.ddata = serverDataAccessService.getDataJson("emp.json").then(function(data){
    //console.log("MM "+$scope.ddata.firstName);
    $scope.ddata = data;
    //console.log($scope.ddata.firstName);
    });
  }])
  .controller('MyCtrl3', ['$scope', 'myService' ,function($scope,myService) {
    
    $scope.name = 'bob';
    $scope.greeting = 'Hola!';
    $scope.greeting = myService.myServiceReturn();
    $scope.todos = {'home':["one","two","three","four"]};
    $scope.tt = {"id": 1,"name": "Foo","price": 123,"tags": [ "Bar", "Eek" ],"stock": {"warehouse": 300,"retail": 20}};
    //$scope.tt = angular.fromJson(tt);

    $scope.greet = function(msg){
          $scope.greeting = "Hello hi "+msg+" !";
    };

    function defaultGreet()
    {
      $scope.greeting = "Hello hi default Greet !";
    }

}]);