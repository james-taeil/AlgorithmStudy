var allPathsSourceTarget = function(graph) {
    
    const path = [0];
    const result = [];
    const dfs = (node) => {
        
        if (node === graph.length -1){
            result.push(path.slice(0));
        }
        else {
            for (let el of graph[node]){
                path.push(el);
                dfs(el);
                path.pop();
            }
        }
    }
    
    dfs(0);
    
    return result;
};
