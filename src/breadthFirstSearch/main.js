'use strict';

/*

Given the below binary tree output the tree node values by using a BFS

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1

*/

function breadthFirstSearch(root) {
  var q = [];
  var result = [];
  var node;

  if(root) {
    q.push(root);

    while(q.length > 0) {
      node = q.shift();

      result.push(node.val);

      if(node.left) {
        q.push(node.left);
      }

      if(node.right) {
        q.push(node.right);
      }
    }
  }

  return result.join(',');
}