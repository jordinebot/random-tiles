'use strict';

function homeCtrl($scope, $http, $routeParams) {
	var actual_tiles = 100;
	var actual_width = 240;
	var actual_height = 500;
	
	init_tiles(actual_tiles, actual_width, actual_height);	
	$scope.tiles = tiles;
	
	// Arrange tiles when ready
	$scope.$on('$viewContentLoaded', arrange_tiles(BEST_FIT)); // <---- Doesn't work!
	

}