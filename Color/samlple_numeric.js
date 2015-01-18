var Color = require('./Color.js');

var red,
 white,
 pink;

red = new Color(1,0,0);
white = new Color(1,1,1);

pink = [red, white].lerp(0.7);
console.log(pink);
