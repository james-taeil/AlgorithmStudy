const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });
  return results;
};

const isPrime = (num) => {
  if (num === 1 || num === 0) return false;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0 && i !== 1 && i !== num) return false;
  }
  return true;
};

function solution(str) {
  let answer = 0;

  const list = new Set([]);
  for (let i = 0; i < str.length; i++) {
    getPermutations(str.split(""), i + 1) // ex) [[ '1', '2', '3' ],[ '1', '3', '2' ],[ '2', '1', '3' ],[ '2', '3', '1' ],[ '3', '1', '2' ],[ '3', '2', '1' ]]
      .map((ele) => ele.join("")) // ['123',...]
      .map((ele) => Number(ele))
      .forEach((ele) => {
        list.add(ele);
      });
  }

  list.forEach((num) => {
    isPrime(num) && answer++;
  });

  return answer;
}
