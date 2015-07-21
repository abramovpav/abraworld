'use strict';

module.exports = /*@ngInject*/
    function ArticleController($scope, BlogDataService, $state, $stateParams) {

        function _loadArticle(id) {
            return BlogDataService.article.get(id).then(
                function (response) {
                    if (response.data) {
                        $scope.article = response.data;
                    }
                }
            );
        }

        function init() {
            $scope.article = {};
            _loadArticle($stateParams.id);
        }

        init();
    };
