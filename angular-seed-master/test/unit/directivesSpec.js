'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var element;
  var $scope;
  beforeEach(function(){
    
    angular.mock.module('myApp.services');
    angular.mock.module('myApp.directives');

    angular.mock.module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });

    angular.mock.inject(function($compile, $rootScope) {
      $scope = $rootScope;
      element = angular.element('<span app-version></span>');
      $compile(element)($rootScope);
  });

    angular.mock.inject(function($compile, $rootScope) {
      $scope = $rootScope.$new();
      element = angular.element('<div search>search</div>');
      $compile(element)($rootScope);
  });

  });

  xdescribe('app-version', function() {
    it('should print current version', function() {

      expect(element.text()).toEqual('TEST_VER');
      console.log(element.text());

    });
  });

  describe('search', function() {

    it('should call searchService', function() {
      console.log(element.children().length);
      //console.log( $scope);
    });

  });

});
