'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(angular.mock.module('myApp.services'));
  beforeEach(angular.mock.module('myService'));

  beforeEach(angular.mock.inject(function($rootScope) {
      
      inject(function ($injector) {
            testRootValGetterService = $injector.get('rootValGetterService');
        });

    }));

  it('testing for rootValGetterService() service' , function(){

  		var value = 12345;
        expect(testRootValGetterService.getVal()).toBe(value);
  });

});
