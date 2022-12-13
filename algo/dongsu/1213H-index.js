// 프로그래머스
// level: 2
// language: javascript
// link: https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    citations.sort((a, b) => b - a);
    let result = 0;
    
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            result++;
        }
    }

    return result;
}
