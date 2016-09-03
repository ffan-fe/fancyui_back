import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './ui.component';
import ButtonShow from './button/'
import CheckboxShow from './checkbox';
import RadioboxShow from './radiobox';
import CitySelector from './cityselector';
import GetStarted from './get-started/get-started';

'use strict';

export default angular.module('ui', [
  uiRouter,
  ButtonShow.name,
  CheckboxShow.name,
  RadioboxShow.name,
  CitySelector.name,
  GetStarted.name
])
  .component('ui', component)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('ui.button', {
        url: '/button',
        template: '<button-show></button-show>'
      })
      .state('ui.checkbox', {
        url: '/checkbox',
        template: '<checkbox-show></checkbox-show>'
      })
      .state('ui.radiobox', {
        url: '/radiobox',
        template: '<radiobox-show></radiobox-show>'
      })
      .state('ui.cityselector', {
        url: '/cityselector',
        template: '<city-selector-show></city-selector-show>'
      })
      .state('ui.getstarted', {
        url: '/getstarted',
        template: '<ui-get-started></ui-get-started>'
      });
  });