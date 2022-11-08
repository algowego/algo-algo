// 프로그래머스
// level: 1
// type: array
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let result = '';
    const foodList = [];
    
    food.forEach((v, i) => {
        if (v > 1) {
            const foodNumber = i;
            const foodSet = `${foodNumber}`.repeat(Math.floor(v / 2));
            foodList.push(foodSet);    
        }
    });
    
    result = foodList.join('') + '0' + foodList.reverse().join('');
    
    return result;
}
