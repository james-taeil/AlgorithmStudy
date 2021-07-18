function solution(numbers) {
    let answer = 0;
    
    
    // 순열 구현 https://jun-choi-4928.medium.com/javascript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-21df4b536349
    // 춤추는 개발자 코드 참고
    const getPermutations = (arr, selectNumber) => {
        const result = [];
        
        if (selectNumber === 1) return arr.map((val) => [val]);

        arr.forEach((fixed, index, origin) => {
            //fix 를 제외한 나머지 순열
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
            const permutations = getPermutations(rest, selectNumber - 1);

            // fixed 한 값에 구해온 순열 구하기
            const attached = permutations.map((permutation) => [fixed, ...permutation])
            result.push(...attached);
        })
        return result;
    }

    // 소수 찾기
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let idx = 2; idx <= Math.sqrt(num); idx++) {
            if(num % idx === 0) return false;
        }
        return true;
    }
    
    const arr = numbers.split('')
    const set = new Set();

    for (let idx = 1; idx <= arr.length; idx++) {
        const result = getPermutations(arr, idx);

        // console.log(result); //경우의 수

        result.forEach((el) => {
            // 문자열 합쳐서 정수형으로 만들기
            const num = Number(el.join(''))
            console.log(num)
            if (isPrime(num)) {
                set.add(num);
            }

            
        })
    }

    answer = set.size;
    return answer;
}


let numbers = "011"
console.log(solution(numbers));


// 테스트 케이스 2, 10, 11 실패
// isPrime 함수에서 반복문 범위를 <=로 해주면 된다.



// 에라토스테네스의 체 개념
// let arr = new Array(100).fill(true);

// for (let num = 2; num * num <= 100; num++) {
//     if (arr[num]) {
//         for (let j = num * num; j <= 100; j += num) {
//             arr[j] = false;
//         }
//     }   
// }