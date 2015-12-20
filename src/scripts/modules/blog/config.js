'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider) {
        //
        $stateProvider
            .state('app.common.blog', {
                abstract: true,
                template: '<ui-view/>'
            })
            .state('app.common.blog.list', {
                url: "/blog",
                templateUrl: "blog/index",
                controller: 'BlogController'
            })
            .state('app.common.blog.article', {
                url: "/blog/{id:int}",
                templateUrl: "blog/article",
                controller: 'ArticleController'
            });
    };