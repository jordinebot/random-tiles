'use strict';

var tilesApp = angular.module('tiles', []);

tilesApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl: 'partials/home.html', controller: homeCtrl}).
	when('/img', {templateUrl: 'partials/images.html', controller: imgHomeCtrl}).
	otherwise({redirectTo: '/'});
}]);

tilesApp.directive('whenScrolled', function() {
	return function(scope, elm, attr) {
		var raw = elm[0];

		elm.bind('scroll', function() {
			if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
				scope.$apply(attr.whenScrolled);
			}
		});
	};
});


