var Complex = require('./Complex.js');

var Z,
 T, TZ,
 vars;

T = new Complex('t');
Z = new Complex(1);

TZ = [T,Z].mul();
vars = wz.vars();
console.dir(vars);

var func = TZ.compile(['t','v']));
console.log(func(1,3));
