'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', 'rootValGetterServiceQQ' ,function(version,rootValGetterServiceQQ) {
  	var data = rootValGetterServiceQQ.getVal();
    return function(scope, elm, attrs) {
      elm.text(version);
      //elm.text(data);
    };
  }]).
  directive('search',['searchService',function(searchService){
  	return{
  		restrict:'A',
  		link:function(scope,element,attrs){
  			alert("I am working");
        console.log("start");
        searchService.getPersons("abc").then(
          function(success){
            console.log(success);
            scope.data = success;
            console.log(scope.data);
          },
          function(error){console.log(error);},
          function(notify){console.log(notify);}
          );
        console.log("end");
  		},
      transclude:"true",
      template:'<select ng-model="data" ng-options="d.val for d in data"></select><p ng-transclude></p>',
  		scope:{

  		}//to give directive an isolated scope
  	}
  }]);