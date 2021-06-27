var allPathsSourceTarget = function(graph) {
    
    const path = [0];
    const result = [];
    const func = (node) => {
        
        if (node === graph.length -1){
            result.push([...path]);
        }
        else {
            for (let el of graph[node]){
                path.push(el);
                func(el);
                path.pop();
            }
        }
    }
    
    func(0);
    
    return result;
};