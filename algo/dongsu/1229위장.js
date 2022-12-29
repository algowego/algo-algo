// 프로그래머스
// level: 2
// language: javascript
// link: https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    const f = (n) => { // 팩토리얼
        if (n < 2) return 1;
        return n * f(n - 1);
    };
    
    const c = (n, r) => { // 조합(combination) nCr = n!/(n-r)!r!
        return f(n) / f(n - r) * f(r);
    };
    
    let answer = 1; // 반환 값
    const map = new Map(); // 파라미터 clothes를 category, name(string[]) 형태로 저장할 Map
    
    clothes.forEach(info => { // map에 데이터를 정리하는 로직
        const [item, category] = info;
        
        if (map.has(category)) {
            map.set(category, [...map.get(category), item]);
        } else {
            map.set(category, [item]);
        }
    });
    
    if (map.size === 1) { // map.size === 1 이라면 옷의 갯수를 반환
        return Array.from(map.values())[0].length;
    }
    
    for (const [_, items] of map) { // 경우의 수 계산 로직
        const n = items.length; // 순회하며 하나의 카테고리가 가진 옷 수량
        const resultA = c(n, 1); // n가지의 옷중에 하나를 선택하는 경우
        const resultB = c(n, 0); // n가지의 옷중에 하나도 선택하지 않는 경우
        answer *= (resultA + resultB); // 카테고리의 결과마다 곱해서 누적
    }
        
    return answer - 1; // 전부 아무것도 고르지 않은 즉 하나도 입지 않은 경우 1개를 제거
}
