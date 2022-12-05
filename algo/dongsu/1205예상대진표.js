// 프로그래머스
// level: 2
// link: https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
    let i = 1;
    
    while (n !== 1) {
        if (a % 2 === 1) {
            a += 1;
        }
        if (b % 2 === 1) {
            b += 1;
        }

        if (a === b) {
            return i;
        }   
        
        i += 1;
        a /= 2;
        b /= 2;
    }
    
    return i;
}
