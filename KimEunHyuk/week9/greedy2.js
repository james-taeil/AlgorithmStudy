function solution(name) {
    let answer = 0;
    let ascii = [];
    
    let move = name.length-1;
    answer += move; // Math.min(move, A가 불특정하게 있을 때 이동하는 수);
    
    for (let i=0; i<name.length; i++){
        ascii[i] = name.charCodeAt(i);
    }
    
    // N : 정방향 13 , 역방향 13
    // B ~ M 정방향 / O ~ Z 역방향
        // (Z - name[i] + 1), (name[i] - A) 중 최솟값
    for (let i=0; i<name.length; i++){
        answer += Math.min((91 - ascii[i]), (ascii[i] - 65));
    }
    
    return answer;
}
