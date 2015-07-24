'use strict';

// assume ary is sorted
// returns index of target element in array if found, otherwise returns -1
function binarySearch(ary, target) {
  var high = ary.length - 1;
  var low = 0;
  var mid;

  while(low <= high) {
    mid = Math.floor((low + high) / 2);
    if(ary[mid] > target) {
      high = mid - 1;
    }
    else if(ary[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}