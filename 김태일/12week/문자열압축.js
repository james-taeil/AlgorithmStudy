function solution(s) {
    let answer = 0;
    let sLength = s.length;
    let newArr = [];
    for (let i = 1; i < parseInt(sLength/2); i++) {
        let count = 1;
        let str = '';

        for (let j = 0; j < sLength; j+=i) {
            let current = s.substr(j, i);
            let next = s.substr(j+i, i);

            // console.log(current, 'current')
            // console.log(next, 'next')

            if (current === next) {
                count++;
            } else {
                if (count > 1) str += count + current
                else str += current
                count = 1;
            }
        }
        newArr.push(str.length);
    }
    answer = Math.min(...newArr)

    return answer;
}

let s = 'aabbaccc';
console.log(solution(s));