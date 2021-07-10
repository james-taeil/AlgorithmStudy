class Graph {
  constructor() {
    this.nodes = new Map();
  }
  addNode(node) {
    this.nodes.set(node, []);
  }
  addEdge(src, dest) {
    if (this.nodes.get(src).includes(dest)) return;
    this.nodes.get(src).push(dest);
    this.nodes.get(dest).push(src);
  }
}

const getCountOfNetwork = (graph) => {
  let count = 0;

  // visitedNode 초기화 { '0': false, '1': false, '2': false }
  let visitedNode = {};
  for (let i = 0; i < graph.nodes.size; i++) {
    visitedNode[i] = false;
  }

  const dfsRecursion = (currentNode, visitedNode) => {
    visitedNode[currentNode] = true;

    const adjacencyList = graph.nodes.get(currentNode);
    for (let node of adjacencyList) {
      if (!visitedNode[node]) dfsRecursion(node, visitedNode);
    }
  };

  const dfs = (startingNode) => {
    dfsRecursion(startingNode, visitedNode);
  };

  // visitedNode가 모두 true가 될 때 까지
  while (Object.values(visitedNode).includes(false) === true) {
    dfs(Object.values(visitedNode).indexOf(false));
    count++;
  }

  return count;
};

const getGraphFromComputers = (n, computers) => {
  const graph = new Graph();

  // Graph { nodes: Map(3) { 0 => [], 1 => [], 2 => [] } }
  for (let i = 0; i < n; i++) {
    graph.addNode(i);
  }

  // [[1, 1, 0],[1, 1, 0],[0, 0, 1],] -> Graph { nodes: Map(3) { 0 => [ 1 ], 1 => [ 0 ], 2 => [] } }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) graph.addEdge(i, j);
    }
  }
  return graph;
};

function solution(n, computers) {
  let answer;
  const graphFromComputers = getGraphFromComputers(n, computers);
  answer = getCountOfNetwork(graphFromComputers);
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
