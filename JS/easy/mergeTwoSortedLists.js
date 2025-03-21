/**
 * Definition for singly-linked list.
 *
 */

//not submitted, working on edge cases

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

  let final;
  let fhead;

  console.log("before curr1", current1);
  console.log("before curr2", current2);
  while (current2 || current1) {
    if (!fhead) {
      if (current2.val > current1.val) {
        console.log("1hit");
        final = new ListNode(current1.val);
        fhead = final;
        current1 = current1.next;
      } else if (current2.val < current1.val) {
        console.log("2hit");
        final = new ListNode(current2.val);
        fhead = final;
        current2 = current2.next;
      } else {
        console.log("3hit");
        final = new ListNode(current1.val);
        fhead = final;
        final.next = new ListNode(current2.val);
        final = final.next;
        current1 = current1.next;
        current2 = current2.next;
      }

      console.log("after curr1", current1);
      console.log("after curr2", current2);
    } else {
      if (current2.val > current1.val) {
        final.next = new ListNode(current1.val);
        final = final.next;
        current1 = current1.next;
      } else if (current2.val < current1.val) {
        final.next = new ListNode(current2.val);
        final = final.next;
        current2 = current2.next;
      } else {
        final.next = new ListNode(current2.val);
        final.next.next = new ListNode(current1.val);
        final = final.next.next;
        current1 = current1.next;
        current2 = current2.next;
      }
    }
  }
  return fhead;
};

const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(4);

const head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

const calculatedHead = mergeTwoLists(head1, head2);
console.log(calculatedHead);
