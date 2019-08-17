
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }

  const middleNode = getMiddleNode(head);
  const secondHaflHead = reverseList(middleNode);

  let first = head;
  let second = secondHaflHead;


  // 不需要把list切成两段，
  // 例如 1，2，3，2，1.
  // middleNode是3，reverse，secondHaflHead是1，2，3
  // first从head走， first 1， second 1； first 2， second 2； first 3， second 3. second走完return true
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
};

const getMiddleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const reverseList = (head) => {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
