'use strict';

/**
 * @ngdoc directive
 * @name angularCanvasApp.directive:canvasDrawer
 * @description
 * # canvasDrawer
 */
angular.module('angularCanvasApp')
  .directive('canvasDrawer', function () {

	function get_cursor_position(e, canvas, ctx, cw, width, height) {
	  var gCanvasElement = canvas;

	  var kBoardWidth = width;
	  var kBoardHeight= height;

	  var kPieceWidth = cw;
	  var kPieceHeight= cw;

	  /* returns Cell with .row and .column properties */
	  var x;
	  var y;
	  if (e.pageX != undefined && e.pageY != undefined) {
	    x = e.pageX;
	    y = e.pageY;
	  } else {
	    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	  }
	  x -= gCanvasElement.offsetLeft;
	  y -= gCanvasElement.offsetTop;
	  x = Math.min(x, kBoardWidth * kPieceWidth);
	  y = Math.min(y, kBoardHeight * kPieceHeight);
	  var row = Math.floor(y / kPieceWidth);
	  var column = Math.floor(x / kPieceHeight);
	  // var cell = new Cell(row, column);
	  var cell = { row: row, col: column }
	  console.log(cell);
	  return cell;
	}  	

	var ctrl = function ($scope, $element) {  	
		console.log("IN CONTROLLER");
	}

    return {
      template: '<canvas></canvas>',
	  scope: { 
	  	amount: "=", 
	  	width: '@',
	  	height: '@',
	  	row: '@',
	  	col: '@',
	  	square: '@',
	  },
      restrict: 'E',
      controller: ctrl,
      replace: true,
      link: function postLink(scope, element, attrs) {

      	var width = scope.width;
      	var height = scope.height;
      	var canvas = element[0];
        var ctx = element[0].getContext("2d");
      	var cw = 10;

      	$(element).click(function(e) {
      		console.log("CLICKED", this);
      		get_cursor_position(e, canvas, ctx, cw, width, height);
      	})

        element.css('width', scope.width);
        element.css('height', scope.height);

                // verical
        for (var x = 0.5; x < scope.width; x += cw) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, scope.height);
        }

        // horizontal
        for (var y = 0.5; y < scope.height; y += cw) {
          ctx.moveTo(0, y);
          ctx.lineTo(scope.width, y);
        }

        ctx.strokeStyle = 'gray';
        ctx.stroke();

      }
    };
  });
