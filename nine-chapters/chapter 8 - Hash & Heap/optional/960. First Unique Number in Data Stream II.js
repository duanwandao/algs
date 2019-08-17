//
// const map = new Map();
// const set = new Set();
// class Node {
//   constructor(val, next) {
//     this.val = val;
//     this.next = next;
//   }
// }
//
// let head = new Node(0);
// let tail = head;
//
//
// const add = function (num) {
//   if (set.has(num)) {
//     return;
//   }
//
//   if (map.has(num)) {
//     const prevNode = map.get(num);
//     prevNode.next = prevNode.next.next;
//     map.delete(num);
//     if (prevNode.next) {
//       map.set(prevNode.next.val, prevNode);
//     } else {
//       tail = prevNode;
//     }
//
//     set.add(num);
//
//   } else {
//     const node = new Node(num);
//     map.set(num, tail);
//     tail.next = node;
//     tail = node;
//
//   }
// }
//
//
// const firstUnique = function () {
//   if (head.next) {
//     return head.next.val;
//   }
//   return -1;
// }



class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

// 加入的数字如果set里有了，直接return，不去管它

// 加入的数字如果set里没有，但是map里有，说明这是此数字第一次出现重复，要做如下事情：
// 1. 拿到prev node
// 2. prev node 连到 此数字的后面一个结点
// 3. 做完1，2 表示此数字结点已在链表中删除了，然后在map中把此数字entry删掉
// 4. 如果删掉的是tail，则把prev node设为tail
// 5. set里加入该数字，如果下次再碰到该数字，就能直接return， 不去管它了。


// 加入的数字如果set里没有，map里也没有， 说明这是此数字第一次出现，做如下事情：
// 1. 讲此数字加入map，prevNode是tail
// 2. 讲此数字的结点连到tail后面
// 3. 讲此数字结点设为tail

class DataStream {
  constructor() {
    this. map = new Map();   //{key: num, val: prevNode}
    this. set = new Set();
    this.head = new Node(0);
    this.tail = this.head;
  }
  add(num) {
    const {map, set} = this;
    if (set.has(num)) {
      return;
    }

    if (map.has(num)) {
      const prevNode = map.get(num);
      prevNode.next = prevNode.next.next;
      map.delete(num);
      if (prevNode.next) {
        map.set(prevNode.next.val, prevNode);
      } else {
        this.tail = prevNode;
      }

      set.add(num);

    } else {
      const node = new Node(num);
      map.set(num, this.tail);
      this.tail.next = node;
      this.tail = node;

    }
  }
  firstUnique() {
    if (this.head.next) {
      console.log(this.head.next.val);
      return this.head.next.val;
    }
    return -1;
  }

}

const ds = new DataStream();


ds.add(1)
ds.add(2)
ds.add(2)
ds.firstUnique()
ds.add(3)
ds.add(4)
ds.add(5)
ds.firstUnique()
ds.add(1)
ds.firstUnique()
ds.add(2)
ds.firstUnique()
ds.add(3)
ds.firstUnique()
ds.add(4)
ds.firstUnique()
ds.add(5)
ds.add(6)
ds.firstUnique()
