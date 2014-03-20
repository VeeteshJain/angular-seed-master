'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', 'rootValGetterServiceQQ' ,function(version,rootValGetterServiceQQ) {
  	var data = rootValGetterServiceQQ.getVal();
    return function(scope, elm, attrs) {
      //elm.text(version);
      elm.text(data);
    };
  }]);
