'use strict';

module.exports = /*@ngInject*/
    function AppCtrl($scope) {

        console.log("Hello");
        $scope.world = 'World!!!';

        this.goToParent = function () {
        };
    };
