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
        return $http.get('http://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=' + id + '&format=json');
      }
    };
  });
