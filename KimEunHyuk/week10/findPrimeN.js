function solution(nums) {

  // 소수가 되는 경우의 수를 리턴해야한다.
  let result = 0;

  // 숫자 3개를 골라서 그 합이 소수인지 확인한다
  for (let i=0; i<nums.length; i++){
    for (let j=i+1; j<nums.length; j++){
      for (let k=j+1; k<nums.length; k++){ 
        if (primeNumber(nums[i] + nums[j] + nums[k])===true){
          result++;
        }
      }
    }
  }
  return result;
}

// 소수인지 확인하는 함수
function primeNumber(num) {
  let sqrt = Math.sqrt(num);
  for (let i=2; i<=sqrt; i++){
    if (num % i === 0)
      return false;
  }
  return true;
}
