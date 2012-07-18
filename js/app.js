'use strict';

angular.module('[APP_NAME]', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html', controller: homeCtrl}).
      otherwise({redirectTo: '/'});
}]);