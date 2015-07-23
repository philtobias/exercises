'use strict';

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