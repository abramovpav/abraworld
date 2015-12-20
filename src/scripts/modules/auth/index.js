'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.auth', [])
        .config(require('./config'))
        .controller('LoginController', require('./controllers/LoginController'))
        .factory('AuthDataService', require('./services/AuthDataService'));
