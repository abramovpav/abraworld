'use strict';

module.exports = /*@ngInject*/
    function BlogController($scope, BlogDataService) {

        function _loadArticles() {
            return BlogDataService.articles.get().then(
                function (response) {
                    console.log(response);
                    //if (response.data) {
                    if (response) {
                        //$scope.articles = response.data;
                        $scope.articles = response;
                    }
                }
            );
        }

        function init() {
            $scope.articles = [];
            _loadArticles();
        }

        init();
    };
