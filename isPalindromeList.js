// O(N) time AND space
var isPalindrome = function (head) {
  let curr = head;
  let arr = [];

  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  return arr.join('') === arr.reverse().join('');
};

// O(N) time but O(1) space
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let prev = null;
  while (slow) {
    tmp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = tmp;
  }

  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) {
      return false;
      break;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};
