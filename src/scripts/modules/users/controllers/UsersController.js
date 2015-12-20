'use strict';

module.exports = /*@ngInject*/
    function UsersController($scope, UsersDataService) {

        function _loadUsers() {
            return UsersDataService.users.get().then(
                function (response) {
                    console.log(response);
                    //if (response.data) {
                    if (response) {
                        //$scope.articles = response.data;
                        $scope.users = response;
                    }
                }
            );
        }

        function init() {
            $scope.users = [];
            _loadUsers();
        }

        init();
    };
