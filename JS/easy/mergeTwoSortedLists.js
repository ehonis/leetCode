/**
 * Definition for singly-linked list.
 *
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;

  while (list1.next) {}
};

const head1 = ListNode(1);
head1.next = 2;
head1.next.next = 4;

const head2 = ListNode(1);
head2.next = 3;
head2.next.next = 4;

mergeTwoLists(head1, head2);
