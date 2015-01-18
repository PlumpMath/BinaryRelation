var Complex = require('./Complex.js');

var A,
 B;

A = new Complex('1+i');
B = new Complex('2+(i+3)*(i+4)');

AB = [A,B].mul();
console.log(AB); // [3,4]
