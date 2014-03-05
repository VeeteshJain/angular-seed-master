'use strict';

/* jasmine specs for controllers go here */

describe('these are all my controllers', function(){
  		
  		
		var $scope = null;
        var ctrl = null;
        beforeEach(angular.mock.module('myApp.controllers'));
        /*beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
        }));*/
		beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_,_$controller_){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      //$compile = _$compile_;
      $scope = _$rootScope_;

      ctrl = _$controller_('MyCtrl3', {
      $scope: $scope
    });

      //_$controller_
    }));


  it('should ....', inject(function() {
    //spec body
    expect($scope.name).toBeDefined();

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
