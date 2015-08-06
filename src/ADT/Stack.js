'use strict';

// Last In, First Out (LIFO)
function Stack() {
  this.list = [];
}

Stack.prototype.push = function push(item) {
  this.list.push(item);
};

Stack.prototype.pop = function pop() {
  return this.list.pop();
};

Stack.prototype.length = function length() {
  return this.list.length;
};

Stack.prototype.top = function top() {
  var len = this.length();
  if(len > 0) {
    return this.list[len - 1];
  }
  return null;
};

Stack.prototype.toString = function toString() {
  var ary = [];
  for(var i = this.length() - 1; i > -1; i--) {
    ary.push(this.list[i]);
  }
  return ary.join(',');
};