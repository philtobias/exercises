'use strict';

// Doubly Linked List to implement Stack
// Last In, First Out (LIFO)
// this.head points to last in
// this.tail points to first in
function LinkedListStack() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

LinkedListStack.prototype.push = function(item) {
  var node = {val: item, prev: null, next: null};

  if(!this.tail) {
    this.tail = node;
  }

  if(this.head) {
    this.head.next = node;
    node.prev = this.head;
  }

  this.head = node;
  this.count++;
};

LinkedListStack.prototype.pop = function() {
  var node;

  if(this.head) {
    node = this.head;
    this.head = this.head.prev;
    if(this.head) {
      this.head.next = null;
    }
  }

  if(this.tail && this.tail === node) {
    this.tail = null;
  }

  if(node) {
    node.prev = null;
    node.next = null;
    this.count--;
  }

  return node;
};

LinkedListStack.prototype.length = function() {
  return this.count;
};

LinkedListStack.prototype.top = function() {
  if(this.count) {
    return this.head;
  }
  return null;
};

LinkedListStack.prototype.toString = function() {
  var ary = [];
  var node = this.head;
  
  while(node) {
    ary.push(node.val);
    node = node.prev;
  }

  return ary.join(',');
};