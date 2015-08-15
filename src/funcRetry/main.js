'use strict';

function funcRetry(numRetries, callback) {
  if(numRetries > 0) {
    return funcRetry(--numRetries, callback);
  } else {
    callback.call(null);
    return numRetries;
  }
}

