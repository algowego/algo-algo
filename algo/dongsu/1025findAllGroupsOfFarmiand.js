// leetcode
// difficult: medium
// type: dfs
// https://leetcode.com/problems/find-all-groups-of-farmland/

/**
 * @param {number[][]} land
 * @return {number[][]}
 */
const findFarmland = function(land) {
    const results = [];
    let a = 0;
    let b = 0;
    
    function depthSearch(x, y) {
        // [4] x = row, y = column
        // [5] 값이 0이라면 early return
        if (land[x][y] === 0) return;
        else {
            // [6] a가 row보다 작으면 a = x;
            // [7] b가 column보다 작으념 b = y;
            // [8] [x][y]를 0으로 변경
            if (a < x) a = x;
            if (b < y) b = y;
            land[x][y] = 0;
        }
        
        // [9] 범위 내에서 북서남동 순서로 순회
        if (x > 0) depthSearch(x - 1, y);
        if (y > 0) depthSearch(x, y - 1);
        if (x < land.length - 1) depthSearch(x + 1, y);
        if (y < land[0].length - 1) depthSearch(x, y + 1);
    }
    
    // [1] land순회.
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 1) {
                // [2] land의 아이템이 1인 경우 a, b를 초기화
                // [3] dfs함수 실행 (row, column)
                a = 0;
                b = 0;
                depthSearch(i, j);
                results.push([i, j, a, b]);
            }
        }
    }
    
    return results;
};
