// 有问题

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

  peek() {
    return this.values[0];
  }

  //把最后一个数pop掉，把它和第一个数交换
  //找到第一个数的两个child， 和其中最小的child交换。
  extractMin() {
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


class Solution {
  constructor(k) {
    this.minheap = new MinBinaryHeap();
    this.maxSize = k;
  }
  add(num) {

    const { minheap, maxSize } = this;
    console.log(minheap.peek());
    if (minheap.values.length < maxSize) {
      minheap.insert(num);
      return;
    }

    if (num > minheap.peek()) {
      minheap.extractMin();
      minheap.insert(num);
    }
  }

  topk() {
    console.log(this.minheap.values.sort((a, b) => b - a));
    return this.minheap.values.sort((a, b) => b - a);
  }
}

let s = new Solution(1);
s.add(3);
s.add(10);
s.topk();
s.add(1000);
s.add(-99);
// s.topk();
// s.add(4);
// s.topk();
// s.add(100)
// s.topk()

// Output:
//   [10, 3]
//     [1000, 10, 3]
//     [1000, 10, 4]
//     [1000, 100, 10]
// public void add(int num) {
//   if (minheap.size() < maxSize) {
//     minheap.offer(num);
//     return;
//   }
//
//   if (num > minheap.peek()) {
//     minheap.poll();
//     minheap.offer(num);
//   }
// }
//
// public List<Integer> topk() {
//   Iterator it = minheap.iterator();
//   List<Integer> result = new ArrayList<Integer>();
//   while (it.hasNext()) {
//     result.add((Integer) it.next());
//   }
//   Collections.sort(result, Collections.reverseOrder());
//   return result;
// }
