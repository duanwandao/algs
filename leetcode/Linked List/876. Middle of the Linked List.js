// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
//
//   If there are two middle nodes, return the second middle node.



  var middleNode = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;    //second middle node
};


