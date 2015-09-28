'use strict';

/*
Least Recently Used (LRU) Cache Data Structure

head            tail
 |               |
[a] [b] [c] [d] [e]

Each node in the doubly linked list has a newer and older pointer.

If a new node is added to the list and the current count is greater than the limit
then the least recently used node is removed.
*/

function LRU(limit) {
  this.map = {};
  this.count = 0;
  this.limit = limit;
}

LRU.prototype.push = function(key, value) {
  var node = {key: key, value: value};

  if(this.tail) {
    this.tail.newer = node;
    node.older = this.tail;
  } else {
    this.head = node;
  }

  this.tail = node;
  this.map[key] = node;

  if(this.count >= this.limit) {
    this.shift();
  } else {
    this.count++;
  }
};

LRU.prototype.shift = function() {
  var node = this.head;

  if(node) {
    if(node.newer) {
      node.newer.older = undefined;
      this.head = node.newer;
    }
  }

  node.newer = undefined;
  node.older = undefined;
  delete this.map[node.key];
};

LRU.prototype.get = function(key) {
  var node = this.map[key];

  if(node) {
    if(node === this.tail) {
      return node.value;
    }

    if(node.newer) {
      if(node === this.head) {
        this.head = node.newer;
      }

      node.newer.older = node.older;
    }

    if(node.older) {
      node.older.newer = node.newer;
    }

    if(this.tail) {
      this.tail.newer = node;
    }

    node.older = this.tail;
    node.newer = undefined;
    this.tail = node;
  }

  return node.value;
};

LRU.prototype.toString = function() {
  var node = this.head;
  var ary = [];

  while(node) {
    ary.push(node.key);
    node = node.newer;
  }

  return ary.join(',');
};