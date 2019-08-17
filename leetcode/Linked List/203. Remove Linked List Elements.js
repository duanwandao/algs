var removeElements = function(head, val) {
  if (!head) {
    return null;
  }
  let prev = head;
  let curr = head.next;

  while (curr) {
    if (curr.val === val) {
      curr = curr.next;
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  if (head.val === val) {
    head = head.next;
  }
  return head;
};
