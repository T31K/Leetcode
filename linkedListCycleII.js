var linkedListCycleII = function (head) {
  if (!head) return null;
  if (!head.next) return null;
  let slow = head;
  let fast = head;

  let pointer = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) break;
  }

  if (fast !== slow) return null;

  while (pointer !== slow) {
    pointer = pointer.next;
    slow = slow.next;
  }
  return slow;
};
