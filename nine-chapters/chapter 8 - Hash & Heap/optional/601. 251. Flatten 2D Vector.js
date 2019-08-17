// Design and implement an iterator to flatten a 2d vector.
// It should support the following operations: next and hasNext.
//
//
// Vector2D iterator = new Vector2D([[1,2],[3],[4]]);
//
// iterator.next(); // return 1
// iterator.next(); // return 2
// iterator.next(); // return 3
// iterator.hasNext(); // return true
// iterator.hasNext(); // return true
// iterator.next(); // return 4
// iterator.hasNext(); // return false





// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
var Vector2D = function(v) {
  this.flattened = [].concat(...v);
};

Vector2D.prototype.next = function() {
  return this.flattened.shift();
};


Vector2D.prototype.hasNext = function() {
  return this.flattened.length > 0;
};

console.log(Vector2D([ [1,2,4], [3] ] ));
