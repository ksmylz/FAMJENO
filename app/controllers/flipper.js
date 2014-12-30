'use strict';
  app.controller('FlipperCtrl', function ($scope, $famous) {
    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.evt = new EventHandler();
    
    $scope.flip = function(){
      $famous.find('#flipper')[0].flip();
      console.log("hit");
    }

  }
);
