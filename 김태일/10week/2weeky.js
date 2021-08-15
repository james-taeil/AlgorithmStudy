function solution(scores) {
    let answer = '';
    let personArr = [];
    let temp = [];
    // 자기자신이 최고점 최저점 찾기
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores[i].length; j++) {
            temp.push(scores[j][i])
        }
        personArr.push(temp);
        temp = [];
    }
    let avg = []
    for (let i = 0; i < personArr.length; i++) {
        let max = Math.max(...personArr[i]);
        let min = Math.min(...personArr[i]);
        if (personArr[i][i] === max || personArr[i][i] === min) {
            let elmin = personArr[i].filter(el => min === el).length
            let elmax = personArr[i].filter(el => max === el).length    
            if ((elmin === 1 && personArr[i][i] === min) || (elmax === 1 && personArr[i][i] === max)) {
                personArr[i][i] = 0;
            }
        }
        let personLen = personArr[i].length;
        if (personArr[i][i] === 0)  personLen -= 1;
        avg.push(Math.floor(personArr[i].reduce((a, b) => {
            return a + b
        }, 0) / (personLen*10)));
    }

    for (let i = 0; i < avg.length; i++) {
        switch(avg[i]) {
            case 10: 
                case 9: {
                answer += 'A';
                break;
            }
            case 8: {
                answer += 'B';
                break;
            }
            case 7: {
                answer += 'C'; 
                break;
            }
            case 6: 
                case 5: {
                answer += 'D';
                break
            }
            default : {
                answer += 'F';
                break;
            }
        }
    }
    return answer;
}

let scores = [
    [100,90,98,88,65],
    [50,45,99,85,77],
    [47,88,95,80,67],
    [61,57,100,80,65],
    [24,90,94,75,65]
]
// let scores = [[50,90],[50,87]]
console.log(solution(scores));


// let score = [50, 47, 61, 24]
// let sum = score.reduce((a, b) => {
//     return a + b
// }, 0)
// console.log(sum/score.length);