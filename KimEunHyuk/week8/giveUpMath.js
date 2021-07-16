function solution(answers) {
  let answer = [];

  // 수포자들의 찍는 패턴이 담긴 배열
  let abc = [[1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]; 

  // 몇 개 맞추는지 체크하는 배열
  let count = [0, 0, 0];

  // abc의 답을 하나씩 체크
  for (let i=0; i<abc.length; i++){
    let k = 0;
    for (let j=0; j<answers.length;j++){
      if (answers[j] === abc[i][k++]){
        count[i]++;
      }
      // k가 패턴의 끝에 닿으면 처음으로 돌아간다는 조건
      if (k === abc[i].length){
        k = 0;
      }
    }
  }
  let max = Math.max(...count);

  for (let i=0; i<count.length; i++){
    if (count[i] === max){
      answer.push(i+1);
    }
  }

  return answer;
}
