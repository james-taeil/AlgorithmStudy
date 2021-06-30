function solution(array, commands) {
    const answer = [];

    for (let command of commands) {
        let [i, j, k] = command
        answer.push(array.slice(i-1,j).sort((a, b) => a - b)[k-1])
    }

    return answer;
}


let arr = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
console.log(solution(arr, commands));

 
 