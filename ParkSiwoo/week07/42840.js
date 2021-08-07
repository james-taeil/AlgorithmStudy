// 모의고사
function solution(answers) {
    // 수포자들의 답안패턴
    const students = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    // 수포자들의 점수
    let score = [];

    // 수포자별 점수 계산
    for(let student of students) {
        score.push(answers.reduce((acc,cur,idx) => {
            // 해당 인덱스의 정답이 수포자의 정답 패턴에 일치할경우 점수증가
            cur === student[idx%student.length] ? acc++ : acc;
            // 해당 수포자의 점수를 score 에 push
            return acc;
        },0))
    }

    // 가장 많은 문제를 맞힌 사람 return
    return score.reduce((acc,cur,idx) => {
        // 현재 수포자의 점수가 최대점수와 같을 경우, idx+1값을 배열에 push
        cur === Math.max(...score) ? acc.push(idx+1): acc;
        return acc;
    },[])
}