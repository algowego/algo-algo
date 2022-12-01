// 프로그래머스
// 레벨: 2
// 카테고리: 수학
// 언어: 자바스크립트
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
    let answer = 0;
    let n = 1; 
    let flag = false;
    
    while (!flag) {
        n += 1; // 2
        
        for (let i = 1; i < arr.length; ++i) {
            if ((arr[0] * n) % arr[i]  === 0) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
    }
    
    answer = arr[0] * n;
    
    return answer;
}
