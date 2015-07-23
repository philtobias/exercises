'use strict';

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