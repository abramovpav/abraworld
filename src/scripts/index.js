'use strict';

require('angular');
require('angular-ui-router');

angular.module('abraworld-ui', [
    'ui.router',
    require('./modules/common').name,
    //require('./modules/nothing').name,
    require('./modules/articles').name,
    require('../../tmp/templates').name
]).config(require('./config'));