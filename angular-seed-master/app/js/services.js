'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var mod = angular.module('myApp.services', []);

mod.factory('rootValGetterServiceQQ', function() {
    return {
        getVal: function () {
            return "12345";
        }
    }
    });

mod.value('version', '0.1');
