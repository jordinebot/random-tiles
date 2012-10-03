'use strict';

angular.module('tiles', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html', controller: homeCtrl}).
      when('/img', {templateUrl: 'partials/images.html', controller: imgHomeCtrl}).
      otherwise({redirectTo: '/'});
}]);