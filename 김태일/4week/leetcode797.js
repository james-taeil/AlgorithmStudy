var allPathsSourceTarget = function(graph) {
    const path = [];
    const result = [];
    // 시작지점
    path.push(0);
    const dfs = (node) => {
        // base case
        // 부모 노드까지 오면 여태 햇던것 넣어주기
        if (node === graph.length - 1) {
            result.push(path.slice(0));
        }
        
        // recursive case
        // 2개 경로 만들어주기
        for (let i = 0; i < graph[node].length; i++) {
            // 가장 먼 노드에서 [1,2] 1, 2, 하나씩 push
            path.push(graph[node][i]);
            // 순차적으로 이 인덱스 와 연결되어있는 노드 찾아서 넣어주기
            dfs(graph[node][i]);
            // [0,1,3] [0,1,3,2,3] 결과 나옴...
            // pop 한 이유 : 0번째 인덱스에 1, 3을 빼기 위해
            path.pop();
            
        }
    }
    dfs(0);
    return result;
};
