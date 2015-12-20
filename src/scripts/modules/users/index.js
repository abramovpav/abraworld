'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.users', [])
        .config(require('./config'))
        .controller('UsersController', require('./controllers/UsersController'))
        .controller('UserController', require('./controllers/UserController'))
        .factory('UsersDataService', require('./services/UsersDataService'));
