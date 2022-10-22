// leetcode
// difficult: medium
// type: likedlist
// https://leetcode.com/problems/merge-in-between-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const getInfo = (list, strIndex, endIndex) => {
  let node = list;
  let index = 0;
  const result = {
    start: null,
    end: null,
  };
  
  while (true) {
    if (index === strIndex - 1) {
      result.start = node;
    }
    
    if (index === endIndex) {
      result.end = node.next;
      return result;
    }
    
    node = node.next;
    index++;
  }
};

const findLastNode = (list) => {
  let node = list;
  
  while (node) {
    if (!node.next) {
      return node;
    }
    
    node = node.next;
  }
};

const mergeInBetween = (list1, a, b, list2) => {
  const info = getInfo(list1, a, b);
  const lastNode = findLastNode(list2);
  let node = list1;
  
  console.info(info);
  
  while (true) {
    if (node === info.start) {
      node.next = list2;
      lastNode.next = info.end;
      
      return list1;
    }

    node = node.next;
  }
};
