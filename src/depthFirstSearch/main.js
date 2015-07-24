'use strict';

/*

Given the below binary tree output the tree node values by using a DFS

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

*/

function depthFirstSearch(root) {
  var dfs = function(node, ary) {
    if(node) {
      ary.push(node.val);

      if(node.left) {
        ary = dfs(node.left, ary);
      }

      if(node.right) {
        ary = dfs(node.right, ary);
      }
    }

    return ary;
  };

  return dfs(root, []).join(',');
}