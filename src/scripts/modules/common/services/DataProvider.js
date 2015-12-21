'use strict';

require('angular');

module.exports = /*@ngInject*/
    function DataProvider($http, $q, $cookies) {

        function _error(response) {

        }

        function _call(options) {
            var deferred = $q.defer();
            options.method = options.method || 'GET';
            console.log('opt', options);
            if (!$http.defaults.headers.common.Authorization) {
                var token = $cookies.get('jwt');
                if (token) {
                    $http.defaults.headers.common.Authorization = 'JWT ' + token;
                }
            }
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
                console.log(url, params, config);

                console.log('def', $http.defaults.headers.common);
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