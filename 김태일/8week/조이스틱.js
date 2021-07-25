function solution(name) {
    let updown = 0;
    // 문자 배열 돌면서 A가 아닌거 찾아서 최소값 만큼 더해주기
    for (let i = 0; i < name.length; i++) {
        let compare = name[i].charCodeAt() - "A".charCodeAt();
        updown += compare > 13 ? 26 - compare : compare;
        console.log(updown)
    }

    //좌 우 이동하는 최소 경로 찾기
    
    
    
}

let n = "JAN";
console.log(solution(n));