// 프로그래머스
// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// level 1

function solution(numbers) {
    let result = 0;
    
    for(let i = 0; i < numbers.length - 2; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 0) {
                    result += 1;
                }
            }
        }
    }
    
    return result;
}
