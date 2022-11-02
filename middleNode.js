var middleNode = function (head) {
  let tortoise = head;
  let hare = head;

  while (hare && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next;
  }
  return tortoise;
};
