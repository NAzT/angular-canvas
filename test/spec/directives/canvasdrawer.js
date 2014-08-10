'use strict';

describe('Directive: canvasDrawer', function () {

  // load the directive's module
  beforeEach(module('angularCanvasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<canvas-drawer></canvas-drawer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the canvasDrawer directive');
  }));
});
