'use strict';

/*

Given an array of number find the element that is repeated the most frequent.

For example:
[1, 2, 3, 4, 4, 4, 5, 6]

returns 4, since 4 is repeated three times.
return null if the array is empty
*/

function findMostFrequentValueInArray(ary) {
  var mostFrequentValue = null;
  var maxCount = -1;
  var dict = {};
  var item;

  for(var i = 0, len = ary.length; i < len; i++) {
    item = ary[i];

    if(dict.hasOwnProperty(item)) {
      dict[item] = dict[item] + 1;

      if(dict[item] > maxCount) {
        maxCount = dict[item];
        mostFrequentValue = item;
      }

    } else {
      dict[item] = 1;
    }
  }

  return mostFrequentValue;
}