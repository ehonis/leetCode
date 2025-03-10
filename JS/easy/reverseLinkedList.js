/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseList = function (head) {
  if (!head) return null;

  if (head.next === null) {
    return head;
  } else {
    const tempHead = head;
    head = reverseList(head.next);
    head.next = tempHead;
  }

  return head;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(reverseList(head));
