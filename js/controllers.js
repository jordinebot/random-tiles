'use strict';

function appCtrl($scope, $http, $routeParams) {
	var actual_tiles = 10;
	var actual_width = 240;
	var actual_height = 500;
	
	init_tiles(actual_tiles, actual_width, actual_height);	
}

function homeCtrl($scope, $http, $routeParams) {
	
	
	$scope.tiles = tiles;
	
	// Arrange tiles when ready
	$scope.$on('$viewContentLoaded', arrange_tiles);
	
	

}