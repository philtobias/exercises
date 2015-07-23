'use strict';

describe('hasPathSum()', function() {
  var root;

  describe('full tree', function() {
  /*
          6
         / \
        5   10
       /   / \
      3   9   14
     /  \      \
    1    4      19

  */

    beforeEach(function() {
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

    it('finds path sum', function() {
      // 6 -> 10 -> 9
      expect(hasPathSum(root, 25)).toBe(true);

      // 6 -> 5 -> 3 -> 4
      expect(hasPathSum(root, 18)).toBe(true);      
    });

    it('returns false if no path sum is found', function() {
      expect(hasPathSum(root, 2)).toBe(false);
      expect(hasPathSum(root, 30)).toBe(false);
    });

  });

  describe('empty tree', function() {
    beforeEach(function() {
      root = null;
    });

    it('returns false', function() {
      expect(hasPathSum(root, 0)).toBe(false);
      expect(hasPathSum(root, 3)).toBe(false);
    });
  });
});