'use strict';

module.exports = /*@ngInject*/
    function ArticlesController($scope) {

        $scope.articles = [
            {
                id: 1,
                title: 'First Article',
                body: 'Just testing',
                author: {
                    id: 1,
                    username: 'admin',
                    firstName: 'John',
                    lastName: 'Doe'
                }
            },
            {
                id: 2,
                title: 'Secong Article',
                body: 'Just testing again',
                author: {
                    id: 1,
                    username: 'admin',
                    firstName: 'John',
                    lastName: 'Doe'
                }
            }
        ];
    };
