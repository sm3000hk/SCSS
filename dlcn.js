var app = angular.module('myApp', []);

  app.controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var vm = this;
    vm.showFabs = false;
  }
