
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (parent.priority <= element.priority) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }


  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let leftChild = null;
      let rightChild = null;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
      }

      // 只有左孩子
      if (leftChild !== null && rightChild === null) {
        if (leftChild.priority < element.priority) {
          let temp = this.values[leftChildIdx];
          this.values[leftChildIdx] = this.values[idx];
          this.values[idx] = temp;
        }
      }
      //有左右孩子
      if (leftChild && rightChild) {
        swap = leftChild.priority < rightChild.priority ? leftChildIdx : rightChildIdx;
        if (element.priority > this.values[swap].priority) {
          let temp = this.values[swap];
          this.values[swap] = this.values[idx];
          this.values[idx] = temp;
        }
      }
      if (swap === null) break;
      idx = swap;
    }
  }

}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let q = new PriorityQueue();
q.enqueue("common cold", 5);
q.enqueue("gunshot wound", 1);
q.enqueue("high fever", 4);
q.enqueue("broken arm", 2);
q.enqueue("glass in foot", 3);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();





console.log(q);
