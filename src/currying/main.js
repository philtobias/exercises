'use strict';

// curryingAdd(2)(5) // 7
function curryingAdd(x) {
  return function(y) {
    return x + y;
  };
}