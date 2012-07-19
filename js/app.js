'use strict';

/**
 * Main App Module 
 */
angular.module('tiles', []).directive('arrangeTilesDirective', function() {
    return {
		restrict: 'C',
		scope: {
			tiles: 'bind'	
		},
		templateUrl: 'partials/home.html'
    };
});