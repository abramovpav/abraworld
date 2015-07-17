'use strict';
require('angular');

module.exports =
    angular.module('abraworld-ui.nothing', [])
        .controller('NothingCtrl', require('./controllers/NothingCtrl'));