'use strict';

describe('findMostFrequentValueInArray()', function() {
  it('finds most frequent value', function() {
    var ary = [1, 2, 3, 4, 4, 5, 6, 2, 2, 1, 3, 2, 300, 19];
    expect(findMostFrequentValueInArray(ary)).toBe(2);

    ary = [4, 3, 2, 2000, 8, 2, 9, 700, 8, 8, 1];
    expect(findMostFrequentValueInArray(ary)).toBe(8);
  });

  it('returns null if ary is empty', function() {
    var ary = [];
    expect(findMostFrequentValueInArray(ary)).toBe(null);
  });
});