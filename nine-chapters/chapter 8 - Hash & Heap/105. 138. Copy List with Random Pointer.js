// A linked list is given such that each node contains an additional random pointer
// which could point to any node in the list or null.
//
//   Return a deep copy of the list.

// 如果要copy一个带有random pointer的list，主要的问题就是有可能这个random指向的位置还没有被copy到，所以解决方法都是多次扫描list。
//
//
//
// 第一种方法，就是使用HashMap来做，HashMap的key存原始pointer，value存新的pointer。
//
// 第一遍，先不copy random的值，只copy数值建立好新的链表。并把新旧pointer存在HashMap中。
//
// 第二遍，遍历旧表，复制random的值，因为第一遍已经把链表复制好了并且也存在HashMap里了，所以只需从HashMap中，把当前旧的node.random作为key值，得到新的value的值，并把其赋给新node.random就好。

var copyRandomList = function(head) {
  const  dummy = new Node(0);
  let oldp = head
  let newp = dummy

  const map = new Map();

  while (oldp) {
    let newNode = new Node(oldp.val)
    newp.next = newNode
    map.set(oldp, newNode)

    newp = newp.next
    oldp = oldp.next
  }

  newp = dummy.next
  oldp = head
  while (oldp) {
    if (oldp.random) {
      newp.random = map.get(oldp.random)
    }
    newp = newp.next
    oldp = oldp.next
  }

  return dummy.next
};
