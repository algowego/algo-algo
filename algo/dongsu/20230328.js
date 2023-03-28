// 프로그래머스 Lv.1 공원 산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let position = [];
    
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === 'S') {
        position = [i, j];
      }
    }
  }

  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (const route of routes) {
    const [direction, distanceStr] = route.split(' ');
    const distance = Number(distanceStr);
    let [h, w] = position;
    let step = 0;
      
    while (step < distance) {
      h += directions[direction][0];
      w += directions[direction][1];

      if (h < 0 || H <= h || w < 0 || W <= w || park[h][w] === 'X') {
          break;
      }
        
      step++;
    }
      
    if (step === distance) {
        position = [h, w];
    }
  }

  return position;
}
