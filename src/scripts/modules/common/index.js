'use strict';

require('angular');

module.exports =
    angular.module('abraworld-ui.common', [])
        .controller('AppCtrl', require('./controllers/AppCtrl'))
        .factory('DataProvider', require('./services/DataProvider'));
