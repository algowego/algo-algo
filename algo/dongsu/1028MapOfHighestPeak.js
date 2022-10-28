// leetcode
// difficult: medium
// type: bfs
// https://leetcode.com/problems/map-of-highest-peak

/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */

const highestPeak = function(isWater) {
    const results = new Array(isWater.length).fill(0).map(() => new Array(isWater[0].length).fill(-1));
    const rowLen = isWater.length;
    const colLen = isWater[0].length;
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let queue = [];
    
    for (let row = 0; row < rowLen; row++) {
        for (let column = 0; column < colLen; column++) {
            const value = isWater[row][column];
            
            if (value === 1) {
                results[row][column] = 0; // value === 1 이라면 해당 자리는 water이고 0으로 바꾸기
                queue.push([row, column]); // queue에 해당 index를 [row, column] 형식으로 넣기
            }
        }
    }
    console.info('init queue', queue);
    while(queue.length) {
        const next = [];
        
        for(let [r, c] of queue) {
            for(let [dr, dc] of dir) {
                dr += r; // row에 행에 대한 방향을 더한다.
                dc += c; // col에 열에 대한 방향을 더한다.
                
                if(dr < 0 || dc < 0 || dr >= rowLen || dc >= colLen || results[dr][dc] !== -1) {
                    // dr, dc이 범위안에 포함이 안되거나, -1이 아니면 물이기 때문에 continue 한다.
                    continue;
                }
                
                // 물도 아니며 dr,dc가 범위안에 포함이 되는 경우
                results[dr][dc] = results[r][c] + 1; // 물에서 해당방향이 범위안에 있고 땅이라면 0 + 1 이므로 1로 할당
                next.push([dr, dc]); // next에 1로 할당한 자리 넣기
            }
        }
        
        queue = next; // queue에 next를 할당하기
    }
    
    
    return results; // 반환하기
};
