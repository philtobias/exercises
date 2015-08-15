'use strict';

function parentContainsChild(parentElt, childElt) {
  var elt = childElt;
  while(elt) {
    if(elt === parentElt) {
      return true;
    }
    elt = elt.parentElement;
  }

  return false;
}