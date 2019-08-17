
const getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  const lenA = getLength(headA);
  const lenB = getLength(headB);
  let p = headA;
  let q = headB;

  if (lenA >= lenB) {
    for (let i = 0; i < lenA - lenB; i ++) {
      p = p.next;
    }
  } else {
    for (let i = 0; i < lenB - lenA; i ++) {
      q = q.next;
    }
  }

  while (p !== q) {
    p = p.next;
    q = q.next;
  }

  return p;
}

const getLength = (head) => {
  let len = 0;

  while (head) {
    len ++;
    head = head.next;
  }

  return len;
}

