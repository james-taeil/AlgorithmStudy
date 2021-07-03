function solution(numbers) {
  let answer = '';
  numbers = numbers.map((num) => String(num))
  numbers.sort((a, b) => {
    if (a + b < b + a) {
      return 1;
    }
    if (a + b > b + a) {
      return -1;
    }
  });
  // 11번 테스트 케이스에서 실패
  // -> [0, 0, 0, 0] 입력 시 '0'이 출력되어야함
  if (numbers[0] === '0') return '0'
  answer = numbers.join(''); 
    
  return answer;
}