'use strict';

describe('curryingAdd()', function() {
  it('adds two numbers together', function() {
    expect(curryingAdd(2)(3)).toBe(5);
    expect(curryingAdd(8)(12)).toBe(20);
    expect(curryingAdd(7)(1)).toBe(8);
  });
});