'use strict';

// determines if a Linked List has a loop
// this method uses a slow and fast pointer to
// iterate through the list.
function linkedListHasLoop(node) {
  if(node === null) {
    return false;
  }

  var slow = node;
  var fast = node;

  while(true) {
    slow = slow.next;

    if(fast.next !== null) {
      fast = fast.next.next;
    } else {
      return false;
    }

    if(slow === null || fast === null) {
      return false;
    }

    // does loop exist?
    if(slow === fast) {
      return true;
    }
  }
}