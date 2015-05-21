'use strict';

/**
 * @ngdoc overview
 * @name songappApp
 * @description
 * # songappApp
 *
 * Main module of the application.
 */
angular
  .module('songappApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'youtube-embed'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
