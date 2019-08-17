// Design and implement a TwoSum class. It should support the following operations: add and find.
//
//   add - Add the number to an internal data structure.
//   find - Find if there exists any pair of numbers which sum is equal to the value.
//
//   Example 1:
//
// add(1); add(3); add(5);
// find(4) -> true
// find(7) -> false


var TwoSum = function() {
  this.counter = {};
  this.arr = [];
}

TwoSum.prototype.add = function(number) {
  this.counter[number] = (this.counter[number] || 0) + 1;
  this.arr.push(number);
};

TwoSum.prototype.find = function(value) {
  for (let i = 0; i < this.arr.length; i ++) {
    let num1 = this.arr[i];
    let num2 = value - num1;
    if (num1 === num2 && this.counter[num2] > 1 ||
      num1 !== num2 && this.counter[num2]) {
      return true;
    }

  }
  return false;
};

