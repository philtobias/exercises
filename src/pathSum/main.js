'use strict';

/*

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

*/

function hasPathSum(root, sum) {
  var subsum;
    
  if(!root) {
    return subsum === 0;
  }
  
  subsum = sum - root.val;
  
  if(!root.left && !root.right) {
    return subsum === 0;
  }
  
  if(root.left && hasPathSum(root.left, subsum)) {
    return true;
  }
  
  if(root.right && hasPathSum(root.right, subsum)) {
    return true;
  }
  
  return false;
}