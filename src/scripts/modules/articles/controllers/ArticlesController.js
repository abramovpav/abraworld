'use strict';

module.exports = /*@ngInject*/
    function ArticlesController($scope, ArticlesDataService) {

        function _loadArticles() {
            return ArticlesDataService.articles.get().then(
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
