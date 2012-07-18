'use strict';

angular.module('tiles', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html', controller: homeCtrl}).
      otherwise({redirectTo: '/'});
}]);