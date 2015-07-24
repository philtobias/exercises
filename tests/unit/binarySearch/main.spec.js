'use strict';

describe('binarySearch()', function() {
  it('finds target index in array', function() {
    var ary = [1, 2, 3, 5, 9, 12, 13, 15];
    expect(binarySearch(ary, 1)).toBe(0);
    expect(binarySearch(ary, 2)).toBe(1);
    expect(binarySearch(ary, 3)).toBe(2);
    expect(binarySearch(ary, 5)).toBe(3);
    expect(binarySearch(ary, 9)).toBe(4);
    expect(binarySearch(ary, 12)).toBe(5);
    expect(binarySearch(ary, 13)).toBe(6);
    expect(binarySearch(ary, 15)).toBe(7);
    expect(binarySearch(ary, 0)).toBe(-1);
    expect(binarySearch(ary, 11)).toBe(-1);
  });
});