// class Queue {
//   constructor() {
//     this.data = [];
//   }
//
//   add(record) {
//     this.data.unshift(record);
//   }
//
//   remove() {
//     return this.data.pop();
//   }
//
//   peek() {
//     return this.data[this.data.length - 1];
//   }
//
//   size() {
//     return this.data.length;
//   }
// };
//
// // 构造的时候，初始化两个队列，queue1，queue2。queue1主要用来存储，queue2则主要用来帮助queue1弹出元素以及访问栈顶。
//
// // push：将元素推入queue1当中。
// // pop： 注意要弹出的元素在queue1末端，故将queue1中元素弹出，并直接推入queue2，
// //       当queue1只剩一个元素时，把它pop出来，并作为结果。而后交换两个队列。
// // top： 类似pop，不过不扔掉queue1中最后一个元素，而是把它也推入queue2当中。
// // isEmpty：判断queue1是否为空即可。
// /**
//  * Initialize your data structure here.
//  */
// var MyStack = function() {
//   this.first = new Queue();
//   this.second = new Queue();
// };
//
// /**
//  * Push element x onto stack.
//  * @param {number} x
//  * @return {void}
//  */
// MyStack.prototype.push = function(x) {
//   this.first.add(x);
// };
//
//
// /**
//  * Removes the element on top of the stack and returns that element.
//  * @return {number}
//  */
// MyStack.prototype.pop = function() {
//   while(this.first.size() > 1) {
//     this.second.add(this.first.remove());
//   }
//   const record = this.first.remove();
//   const temp = this.first;
//   this.first = this.second;
//   this.second = temp;
//   return record;
//
// };
//
// /**
//  * Get the top element.
//  * @return {number}
//  */
// MyStack.prototype.top = function() {
//   while(this.first.size() > 1) {
//     this.second.add(this.first.remove());
//   }
//   const record = this.first.remove();
//   this.second.add(record);  //再把它加进second
//   let temp = this.first;
//   this.first = this.second;
//   this.second = temp;
//   return record;
// };
//
// /**
//  * Returns whether the stack is empty.
//  * @return {boolean}
//  */
// MyStack.prototype.empty = function() {
//   return !this.first.peek();
// };
//
//
// const s = new MyStack();
// s.push(1);
// s.push(2);
// s.push(3);
// s.top();
// s.pop();
// s.pop();
//
// console.log(s);


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size ++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size --;
    return temp.value;
  }
  len() {
    return this.size;
  }
}
var MyStack = function() {
  this.first = new Queue();
  this.second = new Queue();
};

MyStack.prototype.push = function(x) {
  this.first.enqueue(x);
};

MyStack.prototype.pop = function() {
  while (this.first.len() > 1) {
    this.second.enqueue(this.first.dequeue());
  }
  const record = this.first.dequeue();
  const temp = this.first;
  this.first = this.second;
  this.second = temp;
  return record;
};

MyStack.prototype.top = function() {
  while (this.first.len() > 1) {
    this.second.enqueue(this.first.dequeue());
  }
  const record = this.first.dequeue();
  this.second.enqueue(record);
  const temp = this.first;
  this.first = this.second;
  this.second = temp;
  return record;
};

MyStack.prototype.empty = function() {
  return this.first.len() === 0;
};

const s = new MyStack();
s.push(1);
s.push(2);

console.log(s.top());
