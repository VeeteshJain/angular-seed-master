'use strict';

/* jasmine specs for controllers go here */

describe('these are all my controllers', function(){
  		
  		
		    var $scopee = null;
        var $scope = null;
        var ctrl = null;
        var ctrl2 = null;
        var service = null;
        var sscope = null;
        var sscopee = null;
        var controller = null;
        var rootScope = null;
        beforeEach(angular.mock.module('myService'));
        /*"myApp.controllers" has "MyCtrl2" which has some dependency on module "serverDataAccessService"
        so we need to mock the module which has that dependency*/
        beforeEach(angular.mock.module('myApp.controllers'));
        /*beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
        }));*/
		beforeEach(angular.mock.inject(function($compile, $rootScope,$controller,myService){
      // The injector unwraps the underscores (_) from around the parameter names when matching

      //"$rootScope" is needed if we want to get "$scope" object from controller .
      sscope = $rootScope.$new();
      sscopee = $rootScope.$new();

      service = myService;
      controller = $controller;
      rootScope = $rootScope;
      //ctrl2 = service.rootValGetterService();
      //console.log(ctrl2);

      //to get controller instance and "{$scope: sscope}" will get '$scope' from controller to "sscope" of "Spec"
      ctrl = $controller("MyCtrl1", {$scope: sscope});
      ctrl2 = $controller("MyCtrl2", {$scope: sscopee});
    }));

    it('should see the controller', function() {
      //testing is specified controller is there or not .and we need to give this controller an scope otherwise it will fail the test case.
        expect(controller('MyCtrl3',{$scope:rootScope.$new()})).toBeTruthy();
        //expect(  ).toBe(true);
        console.log( "MM "+angular.isFunction( controller('MyCtrl3',{$scope:rootScope.$new()}).defaultGreet) );
    });

    it("can be instantiated", function() {
        expect(sscope).toBeDefined();
        //expect(ctrl).
        expect(service).not.toBeNull();
    });

  it('should ....', inject(function() {
    //spec body
    //expect($scope.name).toBeDefined();
    //expect(service.myServiceReturn).toBeDefined();
    //test
    expect(service.test).toBeDefined();
    //expect(sscope.name).toBeDefined();
    
    //myServiceReturn

  }));

  it('should ....', inject(function() {
    //spec body
  }));


  it("should work for objects", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 122,
        b: 34
      };
      //expect(foo).toEqual(bar);
      expect(foo).toBeDefined();
      expect(bar).toBeDefined();
    });

  it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

   it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
    var a, foo = "foo";
    var b=true;

    expect(a).toBeFalsy();
    expect(foo).not.toBeFalsy();
  });

});
