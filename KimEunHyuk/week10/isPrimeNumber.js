function solution(n) {
    var answer = 0;
    
    // 1부터 n까지 반복하면서 소수인지 확인
    for (let i=2; i<=n; i++){
        if (primeNumber(i)===true){
            answer++;
        }
    }
    return answer;
}
 
// 소수 구하는 함수
function primeNumber(num) {
  let sqrt = Math.sqrt(num);
    
  for (let i=2; i<=sqrt; i++){
    if (num % i === 0)
      return false;
  }
  return true;
}
