// 큰수 만들기
// 현재의 선택이 미래의 최선의 선택이다. 
// 
function solution(number, k) {
  // 숫자를 담을 배열
  let s = [];
  // 문자의 수만큼 반복
  [...number].forEach((num) => {
    // k가 0보다 크고, 현재 문자가 배열의 요소보다 작을 경우
    while (k > 0 && s[s.length - 1] < num) {
      // 배열에서 제거 되고
      s.pop();
      // k 1감소
      k--;
    }
    // 배열의 숫자 push
    s.push(num);
  });
  s.splice(s.length - k, k);
  
  return s.join("");
}
