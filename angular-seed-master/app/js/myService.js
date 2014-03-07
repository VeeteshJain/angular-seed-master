	
	var mod = angular.module('myService',[]);
	mod.factory('myService',[function(){

		var test=12;
		myServiceReturn = function(){
			return "this is data by my Service";
		};
		return{
			myServiceReturn:myServiceReturn,
			test:test
		}
		
	}]);

	mod.factory('rootValGetterService', function() {
    return {
        getVal: function () {
            return "12345";
        }
    }
    });