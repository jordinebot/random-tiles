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

function imgHomeCtrl($scope, $http, $routeParams) {
	var actual_tiles = 100;
	var actual_width = 240;
	var actual_height = 500;

	var tumblr_API_KEY = 'PyezS3Q4Smivb24d9SzZGYSuhMNPQUhMsVetMC9ksuGPkK1BTt';
	var tag = 'landscape';
	var image_JSON_URI = 'http://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=' + tumblr_API_KEY;

	load_image_array(image_JSON_URI, SERVICE_TUMBLR, actual_width);
	
	$scope.tiles = tiles;
	
	// Arrange tiles when ready
	$scope.$on('$viewContentLoaded', $scope.tiles = tiles);
	$scope.$on('$viewContentLoaded', arrange_tiles(BEST_FIT)); // <---- Doesn't work!
	
}