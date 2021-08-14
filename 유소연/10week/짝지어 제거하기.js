function solution(s) {
  // 들어오는 문자를 스택으로 저장
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 스택에 저장된 마지막 문제와 현재 문자가 동일한 경우 제거
    if (stack[stack.length - 1] === s[i]) {
      stack.pop();
      continue;
    }
    // 아니면 스택에 저장
    stack.push(s[i]);
  }

  // 스택이 비었으면 모두 짝지어 제거됨
  return stack.length === 0 ? 1 : 0;
}