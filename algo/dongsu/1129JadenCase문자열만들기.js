// 프로그래머스
// 레벨: 2
// 카테고리: 문자열
// 언어: 자바스크립트
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
    let words = s.split(' ');
    const min = 65 // A
    const max = 122 // z
    
    words = words.map((word) => {
        if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 122) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        
        return word.toLowerCase();
    });
    
    return words.join(' ');
}
