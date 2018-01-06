'use strict';

describe('Service: boardManager', function () {

  // load the service's module
  beforeEach(module('leaderboardApp'));

  // instantiate service
  var boardManager;
  beforeEach(inject(function (_boardManager_) {
    boardManager = _boardManager_;
  }));

  it('should do something', function () {
    expect(!!boardManager).toBe(true);
  });

});
