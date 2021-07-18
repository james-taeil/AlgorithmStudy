function solution(answers) {
    let answer = []
    let person_1 = [1, 2, 3, 4, 5];
    let person_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let person_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let score = [0, 0, 0]

    // answers 마다 각 score 하나씩 늘려주기
    for (let idx = 0; idx < answers.length; idx++) {
        // index 초과일 경우를 대비해서 배열 갯수 만큼 나눠주기
        if (answers[idx] === person_1[idx % 5]) {
            score[0]++;
        } 
        if (answers[idx] === person_2[idx % 8]) {
            score[1]++;
        }
        if (answers[idx] === person_3[idx % 10]) {
            score[2]++;
        } 
    }

    //test1 [1,2,3,4,5] >>>>> [5,0,0]
    //test2 [1,3,2,4,2] >>>>> [2,2,2]

    // 최대값 찾기  mdn max >>> Math.max() 배열을 넣을때는 Math.max(...Array)
    // 최대값이랑 비교해서 같은 값 answer에 넣어주기
    let max = Math.max(...score);
    
    for (let idx = 0; idx < score.length; idx++) {
        if (score[idx] === max) {
            answer.push(idx+1);
        }
    }

    return answer
}

// let answers = [1,2,3,4,5]
let answers = [1,3,2,4,2]
console.log(solution(answers))
