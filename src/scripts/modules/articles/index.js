'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.articles', [])
        .config(require('./config'))
        .controller('ArticlesController', require('./controllers/ArticlesController'))
        .factory('ArticlesDataService', require('./services/ArticlesDataService'));
