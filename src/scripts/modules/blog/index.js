'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.blog', [])
        .config(require('./config'))
        .controller('BlogController', require('./controllers/BlogController'))
        .controller('ArticleController', require('./controllers/ArticleController'))
        .factory('BlogDataService', require('./services/BlogDataService'));
