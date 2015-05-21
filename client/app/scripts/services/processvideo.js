'use strict';

/**
 * @ngdoc service
 * @name songappApp.processVideo
 * @description
 * # processVideo
 * Factory in the songappApp.
 */
angular.module('songappApp')
  .factory('processVideo', function ($http) {
    // Service logic


    // Public API here
    return {
      getInfo: function (id) {
        return $http.get('https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=AIzaSyB2mHimrehM1oChaKSJeF50MjmyIXCg6TY&part=snippet');
      }
    };
  });
