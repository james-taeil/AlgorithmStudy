// 다른 사람들 풀이
function solution(numbers) {
    // quicksort
    let x, y;

    // 두개 문자열 합치고 큰 값이 앞으로 오게 만듬
    const answer = numbers.map((num) => num.toString()).sort((a, b) => {
        x = b + a;
        y = a + b;
        return x - y;
    }).join('');
    
    return answer;
}


// 처음 풀이 생각
function solution(numbers) {
    const answer = numbers.sort((a, b) => {
        if (String(a).length < 2) {
            a = a + '0';
        } 
        if (String(b).length < 2) {
            b = b + '0';
        }
        console.log(a);
        console.log(b);
        return b - a;
    }).join('')
    return answer;
}

// 자릿수 문제, 예외케이스 12, 121,  [0,0,0,0] => 0

// 나의 풀이
function solution(numbers) {
    // 0인 경우
    if (numbers.reduce((a, b) => (a + b)) === 0) {
        return '0';
    } 
    else {
        // 4자리수 해결
        // 문자 4번 쓰는것 repeat 쓰면됨
        const answer = numbers.sort((a, b) => {
            for (let i = 0; i < 4; i++) {
                a += String(a)
                b += String(b)
            }
            a = String(a).slice(0, 4);
            b = String(b).slice(0, 4);
            console.log(a);
            console.log(b);
            return b - a;
        }).join('')

        return answer;
    }
}

let num = [3, 30, 34, 5, 9]
console.log(solution(num))