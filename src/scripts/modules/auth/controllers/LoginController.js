'use strict';

module.exports = /*@ngInject*/
    function LoginController($scope, AuthDataService, $state, $stateParams, $cookies) {

        window.log = $scope;
        window.cook = $cookies;

        $scope.login = function () {
            //var _csrf = $cookies.get('csrftoken');
            var _authData = angular.copy($scope.credentials);
            //_authData.csrfmiddlewaretoken = _csrf;
            return AuthDataService.auth.login(_authData).then(
                function (response) {
                    console.log(response);
                    if (response.data) {

                        $scope.requestedUser = response.data;
                    }
                }
            );
        };

        function init() {
            $scope.creadentials = {};
        }

        init();
    };