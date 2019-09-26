//insetion O(logn)
//searching O(logn)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }
    let current = this.root;

    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return false;
  }

  BFS() {
    const queue = [];
    const res = [];
    queue.push(this.root);
    while(queue.length) {
      const curr = queue.shift();
      res.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    return res;
  }
  //根左右
  DFSPreOrder() {
    const res = [];
    function traverse(node) {
      res.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return res;
  }
  //左根右
  DFSInOrder() {
    const res = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      res.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return res;
  }
  //左右根
  DFSPostOrder() {
    const res = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      res.push(node.value);
    }
    traverse(this.root);
    return res;
  }



}

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if(this.root === null) {
//       this.root = newNode;
//     }
//     if (value < this.root.value) {
//       if (!this.root.left) {
//         this.root.left = new BinarySearchTree(value);
//       } else {
//         this.root.left.insert(value);
//       }
//     } else if (value > this.root.value) {
//       if (!this.root.right) {
//         this.root.right = new BinarySearchTree(value);
//       } else {
//         this.root.right.insert(value);
//       }
//     }
//   }
// }

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.DFSInOrder());
