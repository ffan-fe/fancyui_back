/** @module skin module entry */

import angular from 'angular';
import Component from './skin.component';
import uiRouter from 'angular-ui-router';

'use strict';

export default angular.module('skin', [uiRouter])
  .component('skin', Component);