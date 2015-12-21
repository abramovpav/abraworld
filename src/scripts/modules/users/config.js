'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider) {
        //
        $stateProvider
            .state('app.common.users', {
                abstract: true,
                //url: '',
                template: '<ui-view/>'
            })
            .state('app.common.users.list', {
                url: "/users",
                templateUrl: "users/index",
                controller: 'UsersController'
            })
            .state('app.common.users.user', {
                url: "/users/{id:int}",
                templateUrl: "users/article",
                controller: 'UserController'
            });


    };