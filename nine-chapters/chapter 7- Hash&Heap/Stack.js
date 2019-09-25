
// class Stack {
//   constructor() {
//     this.data = [];
//   }
//
//   push(record) {
//     this.data.push(record);
//   }
//
//   pop() {
//     return this.data.pop();
//   }
//
//   peak() {
//     return this.data[this.data.length - 1];
//   }
// }


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// Insertion O(1)
// Removal O(1)
// Searching O(n)
// Access O(n)

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {  //往前接
      // let temp = this.first;
      // this.first = newNode;
      // this.first.next = temp;
      newNode.next = this.first;
      this.first = newNode;
    }
    ++ this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size --;
    return temp.val;
  }

  peak() {
    if (this.first) {
      return this.first.value;
    }
    return null;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack.peak());
stack.pop();
console.log(stack.peak());
stack.pop();
console.log(stack.peak());
stack.pop();
console.log(stack.peak());
