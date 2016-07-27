/** pages modules */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import indexPage from './index/index';
import skinPage from './skin/skin';
import uiPage from './ui/ui';
import nav from './nav/nav'

'use strict';

export default angular.module('components', [
  uiRouter,
  indexPage.name,
  skinPage.name,
  uiPage.name,
  nav.name
])
  .config(($stateProvider, $urlRouterProvider) => {
      'ngInject';
      $stateProvider
        .state('index', {
          url: '/',
          template: '<index></index>'
        })
        .state('skin', {
          url: '/skin',
          template: '<skin></skin>'
        })
        .state('ui', {
          url: '/ui',
          template: '<ui></ui>'
        });
        $urlRouterProvider.otherwise('/');
    });