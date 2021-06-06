function solution(answers) {
  let answer = [];

  let abc = [[1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]; 

  let countABC = [0, 0, 0];

  for (let i=0; i<3; i++){
    let k = 0;
    for (let j=0; j<answers.length;j++){
      if (answers[j] === abc[i][k++]){
        countABC[i]++;
      }
      if (k === abc[i].length-1){
        k = 0;
      }
    }
  }
  let max = Math.max(...countABC);

  for (let i=0; i<countABC.length; i++){
    if (countABC[i] === max){
      answer.push(i+1);
    }
  }

  return answer;
}