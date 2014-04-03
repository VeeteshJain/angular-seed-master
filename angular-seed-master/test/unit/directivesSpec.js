'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  var element;
  var elementt;
  var $scope;
  var $sscope;
  var $q;
  var $httpBackend;
  var mock=null;
  beforeEach(function(){
    mock = {
        getVal: function () {
            console.log("I am FAKE rootValGetterServiceQQ");
            return "12345";
        }
    };

    //angular.mock.module('myApp.services');
    module('foo');
    angular.mock.module('myApp.directives');
    angular.mock.module(function($provide) {
        $provide.value('version', 'TEST_VER');
        //$provide.provider('rootValGetterServiceQQ',mock);
      });

    angular.mock.inject(function($compile, $rootScope,$injector) {
      mock = $injector.get('rootValGetterServiceQQ');
      /*mock = {
        getVal: function () {
            console.log("I am FAKE rootValGetterServiceQQ");
            return "12345";
        }
    };*/
      spyOn(mock,'getVal').andCallFake(function () {
            console.log("I am FAKE rootValGetterServiceQQ");
            return "12345";
        });
      $scope = $rootScope;
      element = angular.element('<span app-version></span>');
      $compile(element)($scope);
      $scope.$digest();
  });
    angular.mock.inject(function($injector){
      $q = $injector.get('$q');
      $httpBackend = $injector.get('$httpBackend');
    });
  });
  afterEach(function(){

  });

  describe('app-version', function() {
    it('should print current version', function() {
      expect(element.text()).toEqual('TEST_VER');
      //console.log(element.text());
    });
  });

  describe('search directive', function() {
    it('should be compiled', function() {

        var searchServiceMock = {
        getPersons: function (keyWord) {
            console.log("mock searchService called");
          var deferred = $q.defer();
            var data = [{'val':'1'},{'val':'2'},{'val':'3'},{'val':'4'},{'val':'5'},{'val':'6'},{'val':'7'}];
            deferred.resolve(data);
            return deferred.promise;
        }
      };
      
      /*angular.mock.module(function($provide) {
        $provide.value('searchService', searchServiceMock);
      });*/

      /*angular.mock.inject(function(searchService){
        console.log(searchService.getPersons("abc"));
      });*/
      //$httpBackend.expectGET('').
      angular.mock.inject(function($compile, $rootScope) {
      $sscope = $rootScope.$new();
      elementt = angular.element('<div search>search</div>');
      $compile(elementt)($sscope);
      $sscope.$digest();
      });
      //console.log(element.children().length);
      //console.log( $scope);

    });

  });

});
