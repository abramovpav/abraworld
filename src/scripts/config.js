'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/articles");
        $locationProvider.html5Mode(true);

        // Now set up the states
        $stateProvider
            .state('app', {
                abstract: true,
                template: '<ui-view/>'
            })
            .state('app.common', {
                abstract: true,
                templateUrl: "base"
            });
            //.state('app.common.nothing', {
            //    url: '/',
            //    templateUrl: "nothing/index"
            //});
    };