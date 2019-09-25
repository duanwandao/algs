class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.first = new Stack();
  this.second = new Stack();
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.first.push(x);
};

//1. 第一个stack里的全pop出来， 放到第二个stack里去。
//2. 把第二个stack pop一下，记录下为record
//3. 把剩下的所有元素全push回到第一个stack.
//4. 返回record
MyQueue.prototype.pop = function() {
  while (this.first.peek()) {
    this.second.push(this.first.pop());
  }

  const record = this.second.pop();

  while (this.second.peek()) {
    this.first.push(this.second.pop());
  }
  return record;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  while (this.first.peek()) {
    this.second.push(this.first.pop());
  }

  const record = this.second.peek();

  while (this.second.peek()) {
    this.first.push(this.second.pop());
  }
  return record;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.first.peek();
};




// class MyQueue {
//   constructor() {
//     this.first = new Stack();
//     this.second = new Stack();
//   }

//   push(record) {
//     this.first.push(record);
//   }

//   pop() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.pop();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }
//     return record;
//   }

//   peek() {
//     while (this.first.peek()) {
//       this.second.push(this.first.pop());
//     }

//     const record = this.second.peek();

//     while (this.second.peek()) {
//       this.first.push(this.second.pop());
//     }
//     return record;
//   }

//     empty() {
//         return !this.first.peek();
//     }
// }


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
