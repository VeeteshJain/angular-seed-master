'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var mod = angular.module('myApp.services', []);

mod.factory('rootValGetterServiceQQ', function() {
    return {
        getVal: function () {
            console.log("I am REAL rootValGetterServiceQQ");
            return "12345";
        }
    }
    });

mod.factory('searchService', ['$q',function($q) {
    return {
        getPersons: function (keyWord) {
            console.log("searchService called");
        	var deferred = $q.defer();
            var data = [{'val':'1'},{'val':'2'},{'val':'3'},{'val':'4'},{'val':'5'},{'val':'6'},{'val':'7'}];
            deferred.resolve(data);
            return deferred.promise;
        }
    }
    }]);

mod.value('version', '0.1');