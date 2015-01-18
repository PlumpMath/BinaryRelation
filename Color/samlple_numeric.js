var Color = require('./Color.js');

var red,
 white,
 pink;

red = new Color([1,0,0]);
white = new Color([1,1,1]);

pink = [red, white].lerp(0.7);
console.log(pink); // [0.7, 0, 0]
console.log(pink.format("#RRGGBB")); // "#DD0000"
