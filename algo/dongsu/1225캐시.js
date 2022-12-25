// 프로그래머스
// level: 2
// language: javascript
// link: https://school.programmers.co.kr/learn/courses/30/lessons/17680#qna

function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];

    cities.forEach((city) => {
        city = city.toLowerCase(); // 소문자로 변경
        
        if(cache.includes(city)) { // 캐시에 존제하면 실행시간(answer)에 +1, cache에서 제거
            answer += 1;
            cache.splice(cache.indexOf(city), 1);
        } else { // 캐시에 존재하지 않으면 실행시간(answer)에 +5
            answer += 5;
        }
        
        cache.push(city); // 캐시의 가장 뒤에 추가
        
        if(cache.length > cacheSize) { // 캐시의 사이즈보다 캐시가 커진다면 가장 앞에 부분을 제거
            cache.shift();
        }
    })

    return answer; // 실행시간 반환
}
