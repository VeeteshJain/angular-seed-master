	
	angular.module('serverDataAccessService',["myService"]).factory('serverDataAccessService',["$q","$http","rootValGetterService",function($q,$http,rootValGetterService){

		//var test=12;
		 getDataJson = function(url){
			var deferred = $q.defer();
			var data=null;
			$http.get("data/"+url).success(function(data,status) {
				data = angular.fromJson(data);
				/*//add this line to see that testing will detect and error since you have altered the expected result by service
				data.firstName = "veet";*/

				//"deferred.resolve(data);" by this line "data" is been resolved by "$q" is above this only not after this 
				deferred.resolve(data);
				data = rootValGetterService.getVal();
				//deferred.resolve(data);
		});
		return deferred.promise;
	}

		postDataJson = function(url){
			
		}

		return{
			getDataJson:getDataJson,
			postDataJson:postDataJson,
			rootValGetterService:rootValGetterService
		};
		
	}]);