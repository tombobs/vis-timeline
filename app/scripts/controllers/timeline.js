'use strict';

angular.module('vis1App')
  .controller('TimelineCtrl', function ($scope) {

    $scope.end = moment();
    $scope.start = moment().subtract(1, 'month');
    $scope.current = moment();

    $scope.$on('timeChange', function (e, date) {
      console.log(date);
      $scope.current = date;
    })
  });
