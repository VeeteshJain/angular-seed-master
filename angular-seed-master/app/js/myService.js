	
	angular.module('myService',[]).factory('myService',[function(){

		myServiceReturn = function(){
			return "this is data by my Service";
		};
		return{
			myServiceReturn:myServiceReturn
		}
		
	}]);