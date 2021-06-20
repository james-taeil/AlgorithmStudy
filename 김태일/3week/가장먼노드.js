function solution(n, edge) {
    let answer = 0;
    const obj = {};
    let firstNode, secondNode;

    // 최대값의 버텍스만큼의 배열 만들기
    for (let i = 1; i <= n; i++) {
        obj[i] = [];
    }

    // 서로 간선 값 넣어주기
    for (let i = 0; i < edge.length; i++) {
        firstNode = edge[i][0];
        secondNode = edge[i][1];
        obj[firstNode].push(secondNode);
        obj[secondNode].push(firstNode);
    }

    // 방문 정점 표시
    const visited = {}

    for (let v = 0; v <= n; i++) {
        if(!visited[v]) {
            dfs(obj, v, visited);
        }
    }

    return obj;
}

// 깊이 우선 탐색
function dfs (obj, v, visited) {
    visited[v] = true;
    for (let i = 0; i < obj[v].length; i++) {
        if (!visited[obj[v][i]]) {
            dfs(obj, obj[v][i], visited);
        }
    }
}

n = 6;
edge = [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]];
console.log(solution(n, edge));