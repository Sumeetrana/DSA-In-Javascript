class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  printGraph() {
    let get_keys = this.adjList.keys();
    for (let i of get_keys) {
      let get_values = this.adjList.get(i);
      let conc = '';
      for (let j of get_values) {
        conc += j + ' ';
      }
      console.log(i + ' -> ' + conc);
    }
  }
}

const graph = new Graph(6);
let vertices = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0; i < graph.noOfVertices; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.printGraph();
