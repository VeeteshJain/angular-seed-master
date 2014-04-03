describe("A suite", function() {
var $scopee = null;
        var $scope = null;
        var ctrl = null;
        var ctrl2 = null;
        var service = null;
        var sscope = null;
        var sscopee = null;
        var controller = null;
        var rootScope = null;

  beforeEach(function() {
    loadFixtures("html_fixtures.html");
    spyOn($, "ajax");

        angular.mock.module('myService');
        angular.mock.module('serverDataAccessService');
        /*"myApp.controllers" has "MyCtrl2" which has some dependency on module "serverDataAccessService"
        so we need to mock the module which has that dependency*/
        angular.mock.module('myApp.controllers');
        /*beforeEach(inject(function ($injector) {
            $scope = $injector.get('$rootScope');
            $controller = $injector.get('$controller');
        }));*/
    angular.mock.inject(function($compile, $rootScope,$controller,myService){
      // The injector unwraps the underscores (_) from around the parameter names when matching

      //"$rootScope" is needed if we want to get "$scope" object from controller .
      sscope = $rootScope.$new();
      sscopee = $rootScope.$new();
      $scope = $rootScope.$new();

      service = myService;
      controller = $controller;
      rootScope = $rootScope;
      //ctrl2 = service.rootValGetterService();
      //console.log(ctrl2);

      //to get controller instance and "{$scope: sscope}" will get '$scope' from controller to "sscope" of "Spec"
      ctrl = $controller("MyCtrl1", {$scope: sscope});
      //ctrl2 = $controller("MyCtrl2", {$scope: sscopee});
    });

    //console.log(sscope);
    //sscope.$apply();
    //sscopee.$apply();
  });

  it("contains function to answer all the questions", function() {
    //expect(App.superSmartFunction()).toBe(42);
    //expect(true).toBe(false);
    //console.log(sscope);
    /*spyOn(sscope,"testJquery").andCallThrough();
    sscope.testJquery();
    expect(sscope.testJquery).toHaveBeenCalled();*/
  });

  xit("will change header text", function() {
    var $header = $("h1");
    expect($header.text()).toBe("Test");
    App.clickCallback("h1", "Clicked");
    expect($header.text()).toBe("Clicked");
  });

  xit("supports spying on ajax requests", function() {
    App.ajaxRequest(function(data) { return data + ' + test'; });
    var lastCall = $.ajax.mostRecentCall.args[0];

    expect(lastCall.url).toBe("/resource");
    expect(lastCall.success("ajax response")).toBe("ajax response + test");
  });

  xit("supports spying on ajax requests", function() {
    spyOn(App, "ajaxRequest").andCallFake($.ajax);
    expect($("span").text()).toBe("Empty");

    App.changeText();
    expect(App.ajaxRequest).toHaveBeenCalled();

    // mock response of ajax callback
    $.ajax.mostRecentCall.args[0]("New text");
    expect($("span").text()).toBe("New text");
  });

});
