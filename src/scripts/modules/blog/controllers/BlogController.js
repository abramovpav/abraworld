'use strict';

module.exports = /*@ngInject*/
    function BlogController($scope, BlogDataService) {

        function _loadArticles() {
            return BlogDataService.articles.get().then(
                function (response) {
                    if (response.data) {
                        $scope.articles = response.data;
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
