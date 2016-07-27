/** index page entry */

import angular from 'angular';
import component from './index.component'
import uiRouter from 'angular-ui-router';

export default angular.module('indexPage', [
  uiRouter
])
  .component('index', component);