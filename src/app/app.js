/** app entry */

import angular from 'angular';
import appComponent from './app.component';
import components from './components/components';
import 'angular-touch';

'use strict';

export default angular.module('app', [
  components.name,
  'ngTouch'
])
  .component('app', appComponent);