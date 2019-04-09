const solution = function (graph, start, finish)  {
	const ascendants  = {};
  	const pathLengths = {};

	const visitedNodes = [];

  	for (let node in graph) {
   		ascendants[node]  = null;
    	pathLengths[node] = Infinity;
  	}

  	pathLengths[start] = 0;

  	let nodeName = start;

  	while (nodeName) {
    	const currentNode    = graph[nodeName];
    	const nodePathLength = pathLengths[nodeName];

    	for (let child in currentNode) {
			const childNodePathLength = currentNode[child] + nodePathLength;

      		if (childNodePathLength < pathLengths[child]) {
				ascendants[child]  = nodeName;
        		pathLengths[child] = childNodePathLength;
      		}
    	}

    	visitedNodes.push(nodeName);

    	nodeName = getNodeWithShortestPath(pathLengths, visitedNodes);
  	}

  	const distance = pathLengths[finish];
  	const path     = [ finish ];

  	let previousNode = ascendants[finish];

 	while (previousNode) {
    	path.push(previousNode);

    	previousNode = ascendants[previousNode];
  	}

  	path.reverse();

  	return { distance, path };
}

/**
 * Returns name of the node with the shortest path to it from the given 'nodeName'.
 * @param {object} pathLengths - The storage of all nodes and shortest path lengths to them.
 * @param {array} visitedNodes - The arrays of nodes that was proccessed while going throung the graph.
 * @return {string} The name of the node.
 */
function getNodeWithShortestPath(pathLengths, visitedNodes) {
	const allGraphNodes = Object.keys(pathLengths);
  
	let shortestPathNodeName = null; 

	allGraphNodes.forEach(node => {
		const isNodePathLengthShorter = pathLengths[node] < pathLengths[shortestPathNodeName];
		const isNodeAppropriate       = !shortestPathNodeName || isNodePathLengthShorter;

		if (isNodeAppropriate && !visitedNodes.includes(node)) {
			shortestPathNodeName = node;
		}
	});

	return shortestPathNodeName;
}
