'use strict';

/**
 * @ngdoc function
 * @name leaderboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leaderboardApp
 */
angular.module('leaderboardApp')
  .controller('MainCtrl', ['$scope', 'boardManager', function ($scope, boardManager) {
    const self = this;
    self.data = boardManager.getData();
    self.sortByRecentBrownie = function() {
      self.data = boardManager.getByRecentBrownie();
    }
    self.sortByAllTimeBrownie = function() {
      self.data = boardManager.getByBrownie();
    }
    setTimeout(function() {
      self.data = boardManager.getData();
      $scope.$apply();
    }, 1000);
  }]);
