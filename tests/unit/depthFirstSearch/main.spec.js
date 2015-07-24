'use strict';

describe('depthFirstSearch()', function() {
  var root;

  beforeEach(function() {
      /*
            6
           / \
          5   10
         /   / \
        3   9   14
       /  \      \
      1    4      19
    */
    root = new TreeNode(6);
    root.left = new TreeNode(5);
    root.right = new TreeNode(10);

    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(1);
    root.left.left.right = new TreeNode(4);

    root.right.left = new TreeNode(9);
    root.right.right = new TreeNode(14);
    root.right.right.right = new TreeNode(19);
  });

  it('outputs result for full tree', function() {
    expect(depthFirstSearch(root)).toBe('6,5,3,1,4,10,9,14,19');
  });

  it('returns empty when root is empty', function() {
    expect(depthFirstSearch(null)).toBe('');
  });

  it('returns root val if root is a leaf', function() {
    var myRoot = new TreeNode(3);
    expect(depthFirstSearch(myRoot)).toBe('3');
  });
});