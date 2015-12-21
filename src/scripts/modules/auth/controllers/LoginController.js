'use strict';

module.exports = /*@ngInject*/
    function LoginController($scope, AuthDataService, $state, $stateParams, $cookies, UsersDataService, $rootScope) {

        window.log = $scope;
        window.cook = $cookies;

        $scope.login = function () {
            var _authData = angular.copy($scope.credentials);

            return AuthDataService.auth.login(_authData).then(
                function (response) {
                    console.log(response);
                    if (response.token)
                        $cookies.put('jwt', response.token);
                    return response
                },
                function (response) {
                    if (response.non_field_errors)
                        $scope.error = response.non_field_errors;
                    else
                        $scope.error = 'Unable to login';
                    return response
                }
            ).then(
                function(response) {
                    if (!response.token)
                        return;
                    return UsersDataService.user.current().then(
                        function(response) {
                            console.log(response);
                            $rootScope.user = response;
                            $state.go('app.common.blog.list');
                        },
                        function (response) {
                            $scope.error = response
                        }
                    )
                }
            );
        };

        function init() {
            $scope.creadentials = {};
            var csrftoken = $cookies.get('csrftoken');
            console.log('csrf', csrftoken);
        }

        init();
    };