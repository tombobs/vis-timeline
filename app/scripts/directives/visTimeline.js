'use strict';

angular.module('vis1App')
  .directive('visTimeline', function () {
    return {
      restrict: 'A',
      scope: {
        start: '=',
        end: '='
      },
      link: function postLink(scope, element) {

        var range = new vis.DataSet([
          {
            id: 1,
            start: scope.start,
            end: scope.end,
            moveable: false
          }
        ]);

        var options = {
          zoomable: false,
          moveable: false,
          timeAxis: {scale: 'day', step: 1},
          orientation: 'top',
          height: '47px'
        };

        var timeline = new vis.Timeline(element[0], range, options);

        timeline.addCustomTime(moment());

        timeline.on('timechange', function (event) {
          if (moment(event.time).isAfter(scope.end)) {

          }
        });
        timeline.on('timechange', _.debounce(function (event) {
          var item = range.get(1);
          item.end = event.time;
          scope.$emit('timeChange', event.time);
          range.update(item);
        }, 100));

        timeline.setWindow(scope.start, scope.end);
      }
    };
  });
