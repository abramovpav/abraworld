module.exports = /*@ngInject*/
    function($state, $rootState, UsersDataService) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
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

        })
    };