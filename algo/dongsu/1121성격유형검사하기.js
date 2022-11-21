// 프로그래머스
// level 1
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    let data = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    };
    const scores = [3, 2, 1, 0, 1, 2, 3];
    
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        const choice = choices[i];
        
        if (choice - 1 >= 0 && choice - 1 <= 2) {
            data[disagree] += scores[choice - 1];
        }
        
        if (choice - 1 >= 4 && choice - 1 <= 6) {
            data[agree] += scores[choice - 1];
        }
    }
    
    let answer = '';
    data = Object.entries(data);
    
    for (let j = 0; j < data.length - 1; j+= 2) {
        const typeA = data[j];
        const typeB = data[j + 1];
        const score = Math.max(typeA[1], typeB[1]);

        if (typeA[1] === score || typeA[1] === typeB[1]) {
            answer += typeA[0];
        } else {
            answer += typeB[0];
        }
    }
    
    return answer;
}
