'use strict';

/**
 * @ngdoc directive
 * @name angularCanvasApp.directive:drawer
 * @description
 * # drawer
 */
angular.module('angularCanvasApp')
  .directive('drawer', function () {
    return {
      template: '<canvas></canvas>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	console.log("drawer linked");	
        element.text('this is the drawer directive');
      }
    };
  });
