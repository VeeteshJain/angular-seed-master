'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var element;
  beforeEach(function(){
    
    angular.mock.module('myApp.services');
    angular.mock.module('myApp.directives');

    angular.mock.module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });

    angular.mock.inject(function($compile, $rootScope) {
      var $scope = $rootScope;
      element = angular.element('<span app-version></span>');
      $compile(element)($rootScope);
  });
  });

  describe('app-version', function() {
    it('should print current version', function() {

      expect(element.text()).toEqual('TEST_VER');
      console.log(element.text());

    });
  });
});
