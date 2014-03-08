'use strict';

/* jasmine specs for services go here */
/*for service Spec 
1>how to get service instance
2>how to get controller instance*/

describe('service', function() {
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

  		var httpBackendReturn = '{"firstName": "John","lastName": "Smith","age": 25,"address": {"streetAddress": "21 2nd Street","city": "New York","state": "NY","postalCode": 10021},"phoneNumbers": [{"type": "home","number": "212 555-1234"},{"type": "fax","number": "646 555-4567"}]}';
  		httpBackend.expectGET('data/emp.json').respond(httpBackendReturn);

        expect(testServerDataAccessService.getDataJson).toBeDefined();
        expect(testServerDataAccessService.postDataJson).toBeDefined();
        //var deferred = q.defer();
        //console.log("qq");
        var result = null;
        var promise = testServerDataAccessService.getDataJson("emp.json");
        promise.then(function(data){
        	result = data;
        });
        httpBackend.flush();
        console.log("aaa "+result.firstName);
        var httpBackendReturnJson = angular.fromJson(httpBackendReturn);
        expect(result).not.toBe(null);
        //expect(result).toBeSimilarTo(httpBackendReturn);
        expect(result).toEqual(httpBackendReturnJson);
        
        
  });

});
