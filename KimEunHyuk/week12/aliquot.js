function solution(left, right) {
    let result = 0;
    let countArr = []; // 약수의 개수를 담아줄 배열
    
    for (let i=left; i<=right; i++){
        let count = 0;
        for (let j=1; j<=i; j++){
            if (i % j === 0){ // 약수일 때마다 count를 증가
                count++;
            }
        }
        countArr.push(count); // 배열에 담아준다
    }
    for (let i=0; i<countArr.length; i++){
        // 개수가 짝수인지 홀수인지에 따라 결과값에 더하거나 빼준다
            // countArr의 길이는 left에서 right까지의 길이와 같기 때문에
        // left + i 의 값을 연산에 사용한다
        if (countArr[i] % 2 === 0){
            result += left + i;
        }
        else {
            result -= left + i;
        }
    }
    return result;
}
