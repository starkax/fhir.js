(function() {

    var mkFhir = require('../fhir');

    angular.module('ng-fhir', ['ng']);

    angular.module('ng-fhir').provider('$fhir', function() {
        var prov;
        return prov = {
            $get: function($http, $q) {
                var adapter = {http: $http, defer: $q.defer};
                return function(prov, adapter){ 
                        return mkFhir(prov, adapter);
                    };
            }
        };
    });

}).call(this);
