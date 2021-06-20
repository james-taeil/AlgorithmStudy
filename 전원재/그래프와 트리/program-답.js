// 이건 제가 찾아봤던 다른 사람들의 답 중에 하나입니다.
function solution(n, edge){
    var answer = 0;
    return bfs(edge,1,n)   // 입력 type을 바꿔준것 같습니다.
}

function bfs(arr,start, end){  
    var visited = new Array(end+1) // 지나간 경로를 표시할 임의의 배열을 두 개 만듭니다.
    var level = new Array(end+1)   
    var queue = [start] // queue의 초기값을 1로 설정합니다. start에 따라 계속 바뀝니다.
    level[0] =0  // level 배열의 0 번째 인덱스의 값을 0으로 합니다.
    level[start] = true // 이걸로 지나간 경로를 표시합니다.
    var lev; 
    while(queue.length){  // queue가 0이 될 때 까지 반복문을 돌려 
        var node = queue.shift() // queue의 앞자리 숫자가 빠지고 node가 그 앞자릿 수를 가집니다.
        lev= level[node]+1     // lev 변수에 level 
        for(var edge of arr){       //  반복문으로 각 배열 안의 숫자를 걸러 냅니다.
            if(edge[0]===node && visited[edge[1]]===undefined){ // 배열의 0번째 인덱스가 queue의 0번째 인덱스와 같고 
                queue.push(edge[1])                         // 방문하지 않았으면 queue에 그 두번째 값을 넣어준다.    
                visited[edge[1]]=true                       //방문처러
                level[edge[1]]= lev                             // level 은 다음 단계로 넘어간다
            } else if(edge[1]===node && visited[edge[0]]=== undefined){ // 1번때 인덱스가 node 와 같고 방문하지 않았으면 
                queue.push(edge[0])          // queue 에 0번째 인덱스 값을 넣어준다.
                visited[edge[0]]=true    // 방문 처리
                level[edge[0]]=lev          // level은 다음 단계로
            }
        }
    }
    return level.filter((i)=>i===lev-1).length   // 
}

///// 다른 분의 정답
function solution(n, edge){      
    var answer = 0;
    let check = [1];            // 1을 요소로 갖는 배열을 만들고
    while(true){                       // while 루프로 true인 동안     
        let newCheck =[];    // 새로 반복할 때 마다 빈배열이 되는 배열
        edge = edge.filter(e=>{  // filter로 값을 뽑아낸다.
            if(check.includes(e[0])&& check.includes(e[1])) return false; // 값을 둘다 포함하고 있으면 false
            if(check.includes(e[0])){   // 앞부분이 일치
                newCheck.push(e[1]);   // 뒤를 뽑아낸다.
                return false  //그 다음 false
            }                          
            if(check.includes(e[1])) {  // 뒤가 일치하면 
                newCheck.push(e[0]);  // 앞을 뽑아내고
                return false   // false
            }
            return true   // true 둘다 걸리지 않으면 배열로 추가 
        });
        if(edge.length === 0 && newCheck.length === 0) { // 탈출 조건
            answer = check.length;   // answer은 걸러진 배열의 길이
            break;   // 탈출
        }
        check = [...new Set(newCheck)];  // 중복 방지
    }
    return answer; 
}