'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.common', [])
        .config(require('./config'))
        .controller('ArticlesController', require('./controllers/ArticlesController'));