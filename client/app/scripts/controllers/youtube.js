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
      var id = isValidYoutubeURL($scope.url);
      if (id) {
        $scope.getVideoInfo(id);
      } else {
        $scope.isLoading = false;
      }
    };

    function isValidYoutubeURL(url) {
      var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      return (url.match(p)) ? RegExp.$1 : false;
    }

    $scope.getVideoInfo = function (id) {
      $scope.isLoading = true;
      $scope.hasData = true;
      processVideo.getInfo(id).then(function (d) {
        console.log(d);
        $scope.isLoading = false;
        $scope.selectedVideo = id;
        $scope.videoInfo = {
          title: d.data.items[0].snippet.title
        }
      });
    }


  });
