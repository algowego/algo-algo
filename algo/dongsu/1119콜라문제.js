// 프로그래머스
// level 1
// 재귀
// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

function solution(a, b, n) {
    let answer = 0;
    let remainingBottles = 0;
    
    const getCoke = (emptyCokeBottles) => {
        if (emptyCokeBottles < a) {
            const currentBottles = emptyCokeBottles + remainingBottles;
            remainingBottles = 0;
            currentBottles >= a && getCoke(currentBottles);
            return;
        }
        
        const cokeBottles = Math.floor(emptyCokeBottles / a) * b;
        remainingBottles += emptyCokeBottles % a;
        answer += cokeBottles;
        getCoke(cokeBottles);
    };
    
    getCoke(n);
    
    return answer;
}
