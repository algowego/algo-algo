// https://school.programmers.co.kr/learn/courses/30/lessons/92334
// 프로그래머스
// level 1

function solution(id_list, report, k) {
    const newReport = [...new Set(report)];
    const out = [];
    const count = Array(id_list.length).fill(0);
    const mail = Array(id_list.length).fill(0);

    for (let r of newReport) {
        const [user, blackUser] = r.split(' ');
        const blackUserIdx = id_list.indexOf(blackUser);
    
        count[blackUserIdx] += 1;

        if (count[blackUserIdx] >= k) {
            out.push(blackUser);
        }
    }

    newReport.forEach((r, idx) => {
        const [user, blackUser] = r.split(' ');

        if (out.indexOf(blackUser) >= 0) {
            const userIndex = id_list.indexOf(user);
            mail[userIndex] += 1;
        } 
    });

  return mail;
}
