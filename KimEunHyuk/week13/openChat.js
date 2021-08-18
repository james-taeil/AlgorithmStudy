function solution(record) {
    var answer = [];
    
    // record의 입력이 무엇이 되는지에 따라 나누기
        // Enter 혹은 Change일 때 id에 해당하는 value 주기
    let nickname = {};
    for (let i=0; i<record.length; i++){
        const str = record[i].split(' ');
        if (str[0] !== 'Leave'){
            nickname[str[1]] = str[2];
        }
    }
    
    // id에 따른 value 정해놓고 한번에 출력
    for (let i=0; i<record.length; i++){
        const str = record[i].split(' ');
        if (str[0] === 'Enter'){
            answer.push(nickname[str[1]]+"님이 들어왔습니다.");
        }
        else if (str[0] === 'Leave'){
            answer.push(nickname[str[1]]+"님이 나갔습니다.");
        }
    }
    return answer;
}
