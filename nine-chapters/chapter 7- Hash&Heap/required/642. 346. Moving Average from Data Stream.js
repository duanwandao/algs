// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
//
//   Example:
//
// MovingAverage m = new MovingAverage(3);
// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3


var MovingAverage = function(size) {
  this.windowSize = size;
  this.arr = [];
  this.sum = 0;
};

MovingAverage.prototype.next = function(val) {
  let { windowSize, arr, sum } = this;

  arr.unshift(val);

  if (arr.length > windowSize) {
    arr.pop();
  }
  return (arr.reduce((accum, currVal) => accum + currVal, sum)) / arr.length;
};

var obj = new MovingAverage(3);
var a = obj.next(1);
var b = obj.next(10);
var c = obj.next(3);
var d = obj.next(5);
console.log(d);
