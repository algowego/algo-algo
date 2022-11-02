
// leetcode
// difficult: medium
// type: two-point
// https://leetcode.com/problems/reorder-list/submissions/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reorderList = function(head) {
  if (!head) {
    return;
  }  
  
  const stack = [];
  let node = head;
  
  while (node) {
    stack.push(node);
    node = node.next;
  }

  const len = stack.length;
  node = head;
  
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      const value = stack.shift();
      node.next = value;
    } else {
      const value = stack.pop();
      node.next = value;
    }
    node = node.next;
  }
  
  node.next = null;
};
