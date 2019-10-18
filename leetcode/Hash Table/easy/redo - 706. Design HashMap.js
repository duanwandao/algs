
class ListNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

var MyHashMap = function() {
  this.dummy = new ListNode();
};

MyHashMap.prototype.put = function(key, value) {
  const prevNode = this.findPrevNode(key);
  if (prevNode) {
    prevNode.next.val = value;
  } else {
    const newNode = new ListNode(key, value);
    newNode.next = this.dummy.next;
    this.dummy.next = newNode;
  }
};

MyHashMap.prototype.get = function(key) {
  const prevNode = this.findPrevNode(key);
  return prevNode ? prevNode.next.val : -1;
};

MyHashMap.prototype.remove = function(key) {
  const prevNode = this.findPrevNode(key);
  if (!prevNode) {
    return;
  }
  prevNode.next = prevNode.next.next;
};

//找prev的原因是remove操作需要知道前置结点
MyHashMap.prototype.findPrevNode = function(key) {
  let curr = this.dummy;
  while (curr.next) {
    if (curr.next.key === key) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */




