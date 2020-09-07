"use strict";

var a = {
  b: {
    c: {
      d: 1
    }
  }
}; //[a,b,c,d]

function f(a) {
  stack = [];
  stack.push('a');

  for (i in a) {
    // console.log(i);
    // console.log(a[i]);
    stack.push(i);

    for (j in a[i]) {
      // console.log(j);
      // console.log(a[i][j]);
      stack.push(j);

      for (k in a[i][j]) {
        // console.log(k);
        // console.log(a[i][j][k]);
        stack.push(k);
      }
    }
  }

  return stack;
} // console.log(f(a))