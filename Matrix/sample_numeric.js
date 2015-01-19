var Matrix = require('./Matrix.js');
var Complex = require('./Complex.js');

var 
 A, B, X;


B = new Complex(2,1);
X = new Matrix([[B,0],[0,1]]);
A = new Matrix([[0,1],[2,1]]);
AX = [A,X].mul();
console.log(AX);

console.log(A.determinant()); // -1
