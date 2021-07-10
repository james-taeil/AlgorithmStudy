function solution(n, computers) {
  let answer = 0;
  const check = new Array(n).fill(false);

  const dfs = (start) => {
    check[start] = true;
        
    for (let i = 0; i < computers[start].length; i++) {
      if (!check[i] && computers[start][i] === 1) {
      dfs(i);
      }
    }
  }

  for (let j = 0; j < computers.length; j++) {
    if (!check[j]) {
      dfs(j);
      answer++;
    }
  }

  return answer;
}