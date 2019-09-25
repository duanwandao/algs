// Merge k sorted linked lists and return it as one sorted list.
// Analyze and describe its complexity.
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

var mergeKLists = function(lists) {
  if(lists.length === 0) return null;
  return lists.reduce(mergeTwoLists);
};

const mergeTwoLists = (l1, l2) => {
  const dummy = new ListNode();
  let curr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  curr.next = l1 || l2;
  return dummy.next;
}
