var Complex = require('./Complex.js');

var Z, W, WZ,
 A, B, C, D;

Z = new Complex(1,0);
W = new Complex(0,1);
WZ = [Z,W].mul();
console.log(WZ);

if ( [[ [A,B].add(), C].mul(),  D].eq() ) {
  A.neg();
}
