'use strict';

/**
 * @ngdoc function
 * @name songappApp.controller:YoutubeCtrl
 * @description
 * # YoutubeCtrl
 * Controller of the songappApp
 */
angular.module('songappApp')
  .controller('YoutubeCtrl', function ($scope, processVideo) {
    $scope.url = '';
    $scope.validate = function() {
      var id;
      if (id = isValidYoutubeURL($scope.url)) {
        getVideoInfo(id);
      } else {
        $('.loader').hide();
      }
    };

    function isValidYoutubeURL(url) {
      var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      return (url.match(p)) ? RegExp.$1 : false;
    }

    function getVideoInfo(id) {
      $('.loader').show();
      processVideo.getInfo(id).then(function (d) {
        console.log(d);
      });
    }


  });
