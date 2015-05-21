'use strict';

/**
 * @ngdoc function
 * @name songappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the songappApp
 */
angular.module('songappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
