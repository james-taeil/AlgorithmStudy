function solution(number, k) {
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]); 
      
        arr.forEach((fixed, index, origin) => {
          const rest = origin.slice(index + 1); 
          const combinations = getCombinations(rest, selectNumber - 1);
          const attached = combinations.map((combination) => [fixed, ...combination]); 
          results.push(...attached);
        });
      
        return results;
      }
    let arr = number.split('');
    let result = []
    let max = 0;
    let selectNum = number.length - k
    arr = getCombinations(arr, selectNum);
    for (let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i].join('')))
    }
    for (let i = 1; i < result.length; i++) {
        max = Math.max(result[i], result[i - 1]);
    }
    return String(max);
}

let number = "4177252841"
let k = 4;
console.log(solution(number, k))