function solution (n) {
    let answer = '';
    const numlist = [4, 1, 2];

    while (n) {
        answer = numlist[n % 3] + answer;
        if (n % 3 === 0) {
            n = n / 3 - 1
        } else {
            n = Math.floor(n / 3);
        }
    }
    return answer;
}

const input = solution(15);
console.log(input);


// TODO 풀이 전략
/** 
**  n = 1 ... return 1
**  n = 2 ... return 2
**  n = 3 ... return 4
**  n = 4 ... return 11
**  n = 5 ... return 12
**  n = 6 ... return 14
**  n = 7 ... return 21
**  n = 8 ... return 22
**  n = 9 ... return 24
**  n = 10 ... return 41
**  n = 11 ... return 42
**  n = 12 ... return 44
**  n = 13 ... return ?
**  n = 14 ... return ?

** 3가자기 반복이나까 나누기 3을 일의 자리로 만든다. 1, 2, 4 반복
** 십의 자리부터가 문제...
** 4의 나누기 3의 몫이 1 ... 이걸로 생각을 할 수 있다.
** 하지만 6인 경우 1이 나와야 하는데 2가 나오니까 몫을 정할때는 값의 -1 을 해준다.

** 나머지 = 0이면 4, 1이면 1, 2이면 2
** 몫 = n / 3 의 값으로 붙인다. 하지만 나머지가 0인 경우 

** 4, 1, 2 배열을 만든다
** 배열의 인덱스의 나누기 3 값을 찾는다.. 후 문자열 붙이기
** n을 몫으로 계속 나누어 할당해준다.
** n을 나눈 값이 0이니 경우 n / 3 하고 -1 을 한 값을 재할당
** 아닌 경우 몫 n으로 할당

**/