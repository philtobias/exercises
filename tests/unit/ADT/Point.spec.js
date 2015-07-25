'use strict';

describe('Point', function() {
  it('has x and y properties', function() {
    var instance = new Point(3, 4);
    expect(instance.x).toBe(3);
    expect(instance.y).toBe(4);
  });  
});