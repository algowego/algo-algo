// leetcode
// difficult: medium
// type: binary-tree
// https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 const reverseOddLevels = function(root) {
  let level = 1;
  let queue = [root];
  
  // bfs 방식으로 풀이
  while (queue.length > 0) { // queue가 없다면 bfs순회가 끝났으므로 while 종료
    const next = []; // 다음 queue에 담을 배열
		
    for (node of queue) { // 자식만 next에 넣음
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
		
    if (level % 2 === 0) { // level이 1부터 시작이므로 짝수 레벨만 적용
      let [i, j] = [0, queue.length - 1]; // 가장 왼쪽과 가장 오른쪽의 index
      
      while (i < j) { // 좌 -> 우, 우 -> 좌 방향으로 index를 좁히며 위치를 바꿈
        [queue[i].val, queue[j].val] = [queue[j].val, queue[i].val]; // 서로의 위치 변경
        i++; // index 증가
        j--; // index 감소
      }
    }
    
    queue = [...next]; // queue에 next할당
    level++; // level을 올림
  }
  
  return root; // 변경된 트리 반환
}