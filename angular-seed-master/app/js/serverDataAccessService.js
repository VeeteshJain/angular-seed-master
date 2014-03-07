	
	angular.module('serverDataAccessService',[]).factory('serverDataAccessService',["$q","$http",function($q,$http){

		//var test=12;
		 getDataJson = function(url){
			var deferred = $q.defer();
			var data=null;
			$http.get("data/"+url).success(function(data,status) {
				data = angular.fromJson(data);
				console.log("MMY "+data);
				deferred.resolve(data);
		});
		return deferred.promise;
	}

		postDataJson = function(url){
			
		}

		return{
			getDataJson:getDataJson,
			postDataJson:postDataJson
		};
		
	}]);