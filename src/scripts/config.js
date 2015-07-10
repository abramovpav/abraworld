'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
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
            .state('app.common.state1', {
                url: "/state1",
                templateUrl: "state1/state1"
            })
            .state('app.common.state1.list', {
                url: "/list",
                templateUrl: "state1/state1.list",
                controller: /*@ngInject*/function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('app.common.state2', {
                url: "/state2",
                templateUrl: "state2/state2"
            })
            .state('app.common.state2.list', {
                url: "/list",
                templateUrl: "state2/state2.list",
                controller: /*@ngInject*/function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });
    };