'use strict';

/**
 * @ngdoc function
 * @name songappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the songappApp
 */
angular.module('songappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
