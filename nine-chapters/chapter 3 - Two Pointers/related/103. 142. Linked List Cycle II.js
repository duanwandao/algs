var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head.next;

  while (fast !== slow) {
    if (fast === null || fast.next === null) {
      return null;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  //与 I 的区别
  while (head !== slow.next) {  //注意是slow.next
    slow = slow.next
    head = head.next;
  }
  return head;
};
