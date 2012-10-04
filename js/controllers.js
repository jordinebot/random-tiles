'use strict';



function homeCtrl($scope, $http, $routeParams) {
	var actual_tiles = 200;
	var actual_width = 240;
	var actual_height = 400;
	
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
	var image_JSON_URI = 'http://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=' + tumblr_API_KEY + '&callback=?';

	$scope.timestamp = '';
	$scope.tiles = [];

	$scope.load_data = function() {
		for (var i = 0; i < 1; i++) {

		    $.getJSON(image_JSON_URI + '&before=' + $scope.timestamp, function(json) {

				$scope.$apply(function(){
					var image_array = ng_parse_tumblr_json(json);
					init_image_tiles(image_array, actual_width);
					$scope.tiles = $scope.tiles.concat(tiles);
				});

				$scope.timestamp = tiles.last()['timestamp'];

			});	

		}
	}
	
	$scope.load_data();

}
