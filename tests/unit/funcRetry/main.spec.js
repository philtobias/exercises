'use strict';


describe('funcRetry()', function() {
  var obj = {
    funcRetry: funcRetry,
    callbackFunc: function() {}
  };

  it('calls callbackFunc after 3 retries', function() {
    spyOn(obj, 'callbackFunc');
    spyOn(obj, 'funcRetry').and.callThrough();

    obj.funcRetry(3, obj.callbackFunc);
    expect(obj.callbackFunc).toHaveBeenCalled();
  });

  it('returns 0 after all retries', function() {
    expect(obj.funcRetry(3, function() {})).toBe(0);
    expect(obj.funcRetry(5, function() {})).toBe(0);
    expect(obj.funcRetry(1, function() {})).toBe(0);
    expect(obj.funcRetry(0, function() {})).toBe(0);
  });
});