function solution(brown, yellow) {
  const answer = [];

  const sum = brown + yellow;
  for (let i = 3; i <= 5000; i++) {
    const height = i;
    const width = sum / i;
    console.log(width);
    if (Number.isInteger(width) === false) continue;
    if (width * height === sum && (width - 2) * (height - 2) === yellow) {
      answer.push(width);
      answer.push(height);
      break;
    }
  }

  return answer;
}
