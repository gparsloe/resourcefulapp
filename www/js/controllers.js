angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ToolsCtrl', function($scope, Tools) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.tools = Tools.all();
  $scope.remove = function(tool) {
    Tools.remove(tool);
  };
})

.controller('ToolDetailCtrl', function($scope, $stateParams, Tools) {
  $scope.tool = Tools.get($stateParams.toolId);
})

.controller('ComfortCtrl', function($scope, $stateParams, Tools) {
//  $scope.tool = Tools.get($stateParams.toolId);
})

.controller('PotionsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
