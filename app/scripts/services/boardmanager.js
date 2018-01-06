'use strict';

/**
 * @ngdoc service
 * @name leaderboardApp.boardManager
 * @description
 * # boardManager
 * Service in the leaderboardApp.
 */
angular.module('leaderboardApp')
  .service('boardManager', function () {
    const APIURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    let data = {};
    const body = fetch(APIURL)
    .then((body) => body.json())
    .then((json) => {
      data = json;
    });
    this.getData = function() {
      return data;
    };
    this.getByBrownie = function () {
      const temp = Array.from(data);
      temp.sort(function (a, b) {
        const aBrownie = a.alltime;
        const bBrownie = b.alltime;
        if (aBrownie > bBrownie) {
          return 1;
        } else if (aBrownie < bBrownie) {
          return -1;
        } else {
          return 0;
        }
      });
      temp.reverse();
      return temp;
    };
    this.getByRecentBrownie = function () {
      const temp = Array.from(data);
      temp.sort(function (a, b) {
        const aBrownie = a.recent;
        const bBrownie = b.recent;
        if (aBrownie > bBrownie) {
          return 1;
        } else if (aBrownie < bBrownie) {
          return -1;
        } else {
          return 0;
        }
      });
      temp.reverse();
      return temp;
    };
  });