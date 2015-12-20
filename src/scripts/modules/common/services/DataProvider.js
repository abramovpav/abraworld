'use strict';

require('angular');

module.exports = /*@ngInject*/
    function DataProvider($http, $q) {

        function _error(response) {

        }

        function _call(options) {
            var deferred = $q.defer();
            options.method = options.method || 'GET';
            $http(options)
                .success(function (response) {
                    _error(response);

                    deferred.resolve(response);
                })
                .error(function (response) {
                    deferred.reject(response);
                });
            return deferred.promise;
        }

        return {
            call: _call,
            get: function (url, params, config) {
                return _call(angular.extend({url: url, params: params}, config));
            },
            post: function (url, data, config) {
                return _call(angular.extend({
                    url: url, data: data, method: 'POST'
                }, config));
            }
        };

    };

console.log('provider');