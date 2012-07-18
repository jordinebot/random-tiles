'use strict';

function appCtrl($scope, $http, $routeParams) {
}

function homeCtrl($scope, $http, $routeParams) {
	init_tiles(actual_tiles, actual_width, actual_height);
	$scope.tiles = tiles;
}