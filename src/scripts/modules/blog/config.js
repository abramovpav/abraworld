'use strict';

module.exports = /*@ngInject*/
    function ($stateProvider) {
        //
        $stateProvider
            .state('app.common.blog', {
                url: "/blog",
                templateUrl: "blog/index",
                controller: 'BlogController'
            });
            //.state('app.common.articles.list', {
            //    url: "/list",
            //    templateUrl: "articles/state1.list"
                //controller: /*@ngInject*/function ($scope) {
                //    $scope.items = ["A", "List", "Of", "Items"];
                //}
            //})
    };