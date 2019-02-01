const solution = function(graph, start, finish)  {
  const marks = {};
  const ascendants = {};

  const processedNodes = [];

  for (let node in graph) {
    marks[node] = Infinity;
    ascendants[node] = null;
  }

  marks[start] = 0;

  let nodeName = start;

  while (nodeName) {
    let currentNode = graph[nodeName];
    let pathToNode = marks[nodeName];

    for (let child in currentNode) {
      if (currentNode[child] + pathToNode < marks[child]) {
        marks[child] = currentNode[child] + pathToNode;
        ascendants[child] = nodeName;
      }
    }

    processedNodes.push(nodeName);

    nodeName = getNodeWithLowestPath(nodeName, marks, processedNodes);
  }

  function getNodeWithLowestPath(nodeName, marks, processedNodes) {
    let min = Infinity;
    let nodeWithLowestPath = null;

    const node = graph[nodeName];

    for (let child in node) {
      if (marks[child] < min && !processedNodes.includes(child)) {
        min = marks[child];
        nodeWithLowestPath = child;
      }
    }

    return nodeWithLowestPath;
  }

  const distance = marks[finish];
  const path = [finish];

  let previous = ascendants[finish];

  while (previous) {
    path.push(previous);

    previous = ascendants[previous];
  }

  path.reverse();
  
  return { distance, path };
}
