function solution(name) {
    let answer = 0;
    let ascii = [];
    
    let leftCheckA = 0;
    let countLCA = 0;
    let rightCheckA = 0;
    let countRCA = 0;
    let move = name.length-1;
    
    while(true){
        rightCheckA++;
        if (name[rightCheckA] === 'A')
            countRCA++;
        else
            break;
    }
    while(true){
        leftCheckA--;
        if (leftCheckA === -1){
            leftCheckA = name.length - 1;
        }
        if (name[leftCheckA] === 'A')
            countLCA++;
        else
            break;
    }
    
    if (countLCA < countRCA) { // 왼쪽으로 이동
        move -= countRCA;
    }
    else { // 오른쪽으로 이동
        move -= countLCA;
    }
    answer += move;
    
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
