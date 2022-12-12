// 프로그래머스
// level: 2
// language: javascript
// link: https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
    let distance = n; // 남은거리
    let result = 0; // 건전지 사용
    
    while (distance > 0) {
        if (distance % 2 === 0) { // 거리를 2로 나누어서 짝수라면 순간이동 사용
            distance /= 2;
        } else {
            distance -= 1; // 거리를 2로 나누어서 홀수라면 -1을 해서 
            distance /= 2; // 짝수로 만들고 2로 나누어서 순간이동
            result++; // -1을 하며 건전지 1 사용
        }
    }
    
    return result; // 최소한의 건전지를 사용하는 경우
}
