'use strict';

require('angular');
require('angular-ui-router');

angular.module('abraworld-ui', [
    require('./modules/common').name,
    require('../../tmp/templates').name,
    'ui.router'
]).config(require('./config'));