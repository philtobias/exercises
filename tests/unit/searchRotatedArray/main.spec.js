'use strict';

describe('searchRotatedArray()', function() {
  it('finds most frequent value', function() {
    var ary = [5, 6, 7, 0, 1, 2, 3, 4];
    expect(searchRotatedArray(ary, 2)).toBe(5);
    expect(searchRotatedArray(ary, 7)).toBe(2);
    expect(searchRotatedArray(ary, 4)).toBe(7);
    expect(searchRotatedArray(ary, 18)).toBe(-1);
  });

  it('returns -1 if ary is empty', function() {
    var ary = [];
    expect(searchRotatedArray(ary, 3)).toBe(-1);
  });
});