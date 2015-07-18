'use strict';

require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

angular.module('abraworld-ui', [
    'ui.router',
    'ui.bootstrap',
    require('./modules/common').name,
    //require('./modules/nothing').name,
    require('./modules/articles').name,
    require('./modules/profile').name,
    require('../../tmp/templates').name
]).config(require('./config'));