'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.profile', [])
        .config(require('./config'))
        .controller('ProfileCtrl', require('./controllers/ProfileCtrl'));