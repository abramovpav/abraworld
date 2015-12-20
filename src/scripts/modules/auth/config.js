'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider) {
        //
        $stateProvider
            .state('app.auth', {
                abstract: true,
                //url: '',
                template: '<ui-view/>'
            })
            .state('app.auth.login', {
                url: "/login",
                templateUrl: "auth/login",
                controller: 'LoginController'
            })
    };