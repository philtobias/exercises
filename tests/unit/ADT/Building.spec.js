'use strict';

describe('Building', function() {
  it('has left, height, right', function() {
    var instance = new Building(2, 9, 3);
    expect(instance.left).toBe(2);
    expect(instance.right).toBe(9);
    expect(instance.height).toBe(3);
  });  
});