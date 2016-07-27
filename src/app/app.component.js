/** @module src/app.component */

import 'bp-admin-skin';
import './app.less';
import 'bootstrap';
import template from './app.template.html';
import controller from './app.controller';

'use strict';

export default {
  template,
  controller,
  controllerAs: 'vm'
}