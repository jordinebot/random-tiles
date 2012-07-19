'use strict';

/**
 * Main App Module 
 */
angular.module('tiles', []).directive('myAwesomeDirective', function() {
    return {
        // directive definition object goes here
    };
}).config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html', controller: homeCtrl}).
      otherwise({redirectTo: '/'});
}]);