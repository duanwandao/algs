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
//   peak() {
//     return this.data[this.data.length - 1];
//   }
// }
//
//
// const weave = (sourceOne, sourceTwo) => {
//   const q = new Queue();
//
//   while (sourceOne.peak() || sourceTwo.peak()) {
//     if (sourceOne.peak()) {
//       q.add(sourceOne.remove());
//     }
//     if (sourceTwo.peak()) {
//       q.add(sourceTwo.remove());
//     }
//   }
//
//   return q;
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

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
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

  // identical to stack pop()
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

  peak() {
    if (this.first) {
      return this.first.value;
    }
    return null;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
console.log(q.peak());
q.dequeue();
q.dequeue();

