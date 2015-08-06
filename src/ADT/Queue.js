'use strict';

function Queue() {
  this.list = [];
}

Queue.prototype.enqueue = function enqueue(item) {
  this.list.push(item);
};

Queue.prototype.dequeue = function dequeue() {
  return this.list.shift();
};

Queue.prototype.length = function length() {
  return this.list.length;
};

Queue.prototype.peek = function peek() {
  if(this.length()) {
    return this.list[0];
  }
  return null;
};

Queue.prototype.toString = function toString() {
  return this.list.join(',');
};