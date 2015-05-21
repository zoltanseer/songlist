'use strict';

describe('Service: processVideo', function () {

  // load the service's module
  beforeEach(module('songappApp'));

  // instantiate service
  var processVideo;
  beforeEach(inject(function (_processVideo_) {
    processVideo = _processVideo_;
  }));

  it('should do something', function () {
    expect(!!processVideo).toBe(true);
  });

});
