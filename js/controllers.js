'use strict';

function appCtrl($scope, $http, $routeParams) {
}

function homeCtrl($scope, $http, $routeParams) {
	init_tiles(10, 200, 500);
	$scope.tiles = tiles;
}