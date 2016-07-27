/** skin component controller */

import TweenMax from 'gsap';

'use strict';

export default class SkinController {
  constructor($anchorScroll, $location) {
    'ngInject';
    this.$anchorScroll = $anchorScroll;
    this.$location = $location;
    let container = document.getElementById('main-container');
    container.style.opacity = 0;
    TweenMax.to(container, .5, {opacity: 1, ease: 'easeIn'});
    $.getScript('https://buttons.github.io/buttons.js');
  }
  goAnchor(anchorName) {
    this.$location.hash(`${anchorName}_anchor`)
    this.$anchorScroll();
  }
}