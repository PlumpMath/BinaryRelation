var Complex = require('./Complex.js');

var Z, W, WZ,
 A, B, C, D;

Z = new Complex([1,0]);
W = new Complex([0,1]);
WZ = [Z,W].mul();
console.log(WZ);

A = new Complex([0,1]);
B = new Complex([0,1]);
C = new Complex([0,1]);
D = new Complex([0,1]);

if ( [[ [A,B].add(), C].mul(),  D].eq() ) {
  console.log(A); // [-1,1]
} else {
  console.log(A.format("RE+IM*i")); // "10+9*i"
}
