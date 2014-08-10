'use strict';

/**
 * @ngdoc function
 * @name angularCanvasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCanvasApp
 */
angular.module('angularCanvasApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
