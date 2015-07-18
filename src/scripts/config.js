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
            })
            //.state('app.common.nothing', {
            //    url: '/',
            //    templateUrl: "nothing/index"
            //})
            .state('app.common.profile', {
                url: "/profile",
                templateUrl: "profile/index"
            })
            .state('app.common.state2.list', {
                url: "/list",
                templateUrl: "state2/state2.list",
                controller: /*@ngInject*/function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });
    };