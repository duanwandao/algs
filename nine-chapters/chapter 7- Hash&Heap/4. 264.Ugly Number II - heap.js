class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
//找到parent， floor（n - 1）/ 2
//比parent小， 交换
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];
      if (parent <= element) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  //把最后一个数pop掉，把它和第一个数交换
  //找到第一个数的两个child， 和其中最小的child交换。
  extractMin() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
      if (leftChild !== null && rightChild === null) {
        if (leftChild < element) {
          let temp = this.values[leftChildIdx];
          this.values[leftChildIdx] = this.values[idx];
          this.values[idx] = temp;
        }
      }

      if (leftChild && rightChild) {
        swap = leftChild < rightChild ? leftChildIdx : rightChildIdx;
        if (element > this.values[swap]) {
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



const nthUglyNumber = function (n) {
  const queue = new MinBinaryHeap();
  const set = new Set();
  queue.insert(1);
  let num;
  while(n > 0){
    num = queue.extractMin();
    if(set.has(num))   continue;           //remove duplicate
    set.add(num);
    queue.insert(num * 2);
    queue.insert(num * 3);
    queue.insert(num * 5);
    n --;
  }
  return num;
}








