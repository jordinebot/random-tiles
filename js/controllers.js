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


/*	Existeix un problema amb la crida assíncrona de $.getJSON i la renderització que fa angular, que es crida abans que hagi acabat la carrega.
	Aquí en parlen: http://stackoverflow.com/questions/11673559/angular-js-data-not-populated-from-asynchronous-http-request
	I aquí hi ha un exemple: http://jsfiddle.net/zdam/dBR2r/

	Suposo que la solució passa per què angular controli la crida asíncrona i prescindir de JQuery

*/