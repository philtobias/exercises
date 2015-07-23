'use strict';

describe('TreeNode', function() {
  it('has val, left, and right properties', function() {
    var instance = new TreeNode(5);
    expect(instance.val).toBe(5);
    expect(instance.left).toBe(null);
    expect(instance.right).toBe(null);
  });  
});