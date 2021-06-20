function solution(n, edge) {
  return bfs(1, edge, n);
}

const bfs = (start, graph, n) => {
  const depth = Array(n + 1).fill(0);
  const visited = Array(n + 1).fill(false);
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const currentNode = queue.shift();
    const depthIs = depth[currentNode] + 1;

    for (let adjacent of graph) {
      if (adjacent[0] === currentNode && !visited[adjacent[1]]) {
        queue.push(adjacent[1]);
        visited[adjacent[1]] = true;
        depth[adjacent[1]] = depthIs;
      } else if (adjacent[1] === currentNode && !visited[adjacent[0]]) {
        queue.push(adjacent[0]);
        visited[adjacent[0]] = true;
        depth[adjacent[0]] = depthIs;
      }
    }
  }

  const MaxCount = Math.max.apply(null, depth);
  return depth.filter((target) => target === MaxCount).length;
};
