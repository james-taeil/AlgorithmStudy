function solution(numbers) {
    var answer = 0;
    
    // 수를 배열에 담는다
    const numArr = [...numbers];
    
    // 순열 알고리즘
      // 하나를 선택하고 나머지 중 조합을 구한다
    const getPermutations = (arr, num) => {
        const result = [];
        
        // 1개씩 선택할 때 바로 모든 배열의 원소 리턴
        if (num === 1)
            return arr.map((value) => [value]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest, num -1);
            const attached = permutations.map((permutation) => [fixed, ...permutation]);
            result.push(...attached);
        });
        return result;
    }
                                       
    return answer;
}

// 소수인지 확인하는 함수
function primeNumber(num) {
    for (let i=2; i<num/2; i++){
        if (num % i === 0)
            return false;
    }
    return true;
}
