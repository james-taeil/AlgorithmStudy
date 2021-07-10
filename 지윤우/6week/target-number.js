// const getCount = (numbers, target) => {
//   let count = 0;

//   const dfs = (idx, init, numbers, target) => {
//     const plus = init + numbers[idx];
//     const minus = init - numbers[idx];
//     console.log(idx, plus, minus);
//     if (idx === numbers.length - 1) {
//       if (plus === target || minus === target) count++;
//       return;
//     }
//     idx++;
//     dfs(idx, plus, numbers, target);
//     dfs(idx, minus, numbers, target);
//   };
//   dfs(0, 0, numbers, target);
//   return count;
// };

const getCount = (numbers, target) => {
  let count = 0;

  const dfs = (idx, result) => {
    if (idx === numbers.length) {
      if (result === target) count++;
      return;
    }
    dfs(idx + 1, result + numbers[idx]);
    dfs(idx + 1, result - numbers[idx]);
  };
  dfs(0, 0);
  return count;
};

function solution(numbers, target) {
  let answer = getCount(numbers, target);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // expected output: 5
