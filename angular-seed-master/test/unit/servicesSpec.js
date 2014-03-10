'use strict';

/* jasmine specs for services go here */
/*for service Spec 
1>how to get service instance
2>how to get controller instance
3>how to mock Http service
4>managring dependency of services and controller 

sites:-
1>for jasmine 				https://github.com/JamieMason/Jasmine-Matchers
							https://github.com/mattfysh/cheat-sinon-jasmine
							http://tobyho.com/2011/12/15/jasmine-spy-cheatsheet/
2>jasmine for angular 		http://www.benlesh.com/2013/06/angular-js-unit-testing-services.html
*/

//we have two describe for Grouping Related Specs 
describe('service ', function() {
	describe(' testing', function() {
	//global Spec variable section 
	var testRootValGetterService = null;
	var testServerDataAccessService = null;
	var testMyCtrl1 = null;
	var httpBackend = null;
	var q = null;

	//to include angular module in jasmine framework
  	beforeEach(angular.mock.module('myApp.services'));
  	//beforeEach(angular.mock.module('myService'));
  	beforeEach(angular.mock.module('myApp.controllers'));
  	beforeEach(angular.mock.module('serverDataAccessService'));


	//"$injector" is from angular by which we can instanciate service and controller.
  	beforeEach(angular.mock.inject(function($rootScope,$controller) {
      //to get instance of service with name "rootValGetterService" in mocked modules
      angular.mock.inject(function ($injector) {
            testRootValGetterService = $injector.get('rootValGetterService');
        });

      angular.mock.inject(function ($injector) {
            testServerDataAccessService = $injector.get('serverDataAccessService');
            q = $injector.get('$q');
            httpBackend = $injector.get('$httpBackend');
        });
      testMyCtrl1 = $controller('MyCtrl1');
    }));

  it('testing for rootValGetterService() service' , function(){

  		var value = "12345";
  		//service function all and checking expected result retured by that function
        expect(testRootValGetterService.getVal()).toBe(value);
  });

  it('testing for serverDataAccessService() service' , function(){

  		//this is for what backend should reply
  		var httpBackendReturn = '{"firstName": "John","lastName": "Smith","age": 25,"address": {"streetAddress": "21 2nd Street","city": "New York","state": "NY","postalCode": 10021},"phoneNumbers": [{"type": "home","number": "212 555-1234"},{"type": "fax","number": "646 555-4567"}]}';
  		httpBackend.expectGET('data/emp.json').respond(httpBackendReturn);

        expect(testServerDataAccessService.getDataJson).toBeDefined();
        expect(testServerDataAccessService.postDataJson).toBeDefined();

        //now calling the service
        var result = null;
        var promise = testServerDataAccessService.getDataJson("emp.json");
        promise.then(function(data){
        	result = data;
        });
        httpBackend.flush();
        console.log("aaa "+result.firstName);
        var httpBackendReturnJson = angular.fromJson(httpBackendReturn);
        expect(result).not.toBe(null);
        expect(result).toEqual(httpBackendReturnJson);

		//expect(testServerDataAccessService.rootValGetterService.getVal).toHaveBeenCalled();
        expect(testServerDataAccessService.rootValGetterService).toBeDefined();
        
        
  });

});
});
