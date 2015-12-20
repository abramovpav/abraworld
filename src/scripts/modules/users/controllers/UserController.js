'use strict';

module.exports = /*@ngInject*/
    function UserController($scope, UsersDataService, $state, $stateParams) {

        function _loadUser(id) {
            return UsersDataService.user.get(id).then(
                function (response) {
                    if (response.data) {
                        $scope.requestedUser = response.data;
                    }
                }
            );
        }

        function init() {
            $scope.requestedUser = {};
            _loadUser($stateParams.id);
        }

        init();
    };