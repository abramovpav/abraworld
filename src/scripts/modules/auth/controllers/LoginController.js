'use strict';

module.exports = /*@ngInject*/
    function LoginController($scope, AuthDataService, $state, $stateParams, $cookies, UsersDataService) {

        window.log = $scope;
        window.cook = $cookies;

        $scope.login = function () {
            //var _csrf = $cookies.get('csrftoken');
            var _authData = angular.copy($scope.credentials);
            //_authData.csrfmiddlewaretoken = _csrf;
            //$http.defaults.headers.common['qweasd'] = 'asdas';
            return AuthDataService.auth.login(_authData).then(
                function (response) {
                    console.log(response);
                    if (response.token)
                        $cookies.put('jwt', response.token);
                    return response
                }
            ).then(
                function() {
                    return UsersDataService.user.current().then(
                        function(response) {
                            console.log(response);
                            $scope.user = response
                        },
                        function (response) {
                            $scope.error = response
                        }
                    )
                }
            );
        };

        //function getCookie(name) {
        //    var cookieValue = null;
        //    if (document.cookie && document.cookie != '') {
        //        var cookies = document.cookie.split(';');
        //        for (var i = 0; i < cookies.length; i++) {
        //            var cookie = jQuery.trim(cookies[i]);
        //            // Does this cookie string begin with the name we want?
        //            if (cookie.substring(0, name.length + 1) == (name + '=')) {
        //                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        //                break;
        //            }
        //        }
        //    }
        //    return cookieValue;
        //}


        function init() {
            $scope.creadentials = {};
            var csrftoken = $cookies.get('csrftoken');
            console.log('csrf', csrftoken);
        }

        init();
    };