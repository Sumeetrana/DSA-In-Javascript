class Edge {
  constructor(src, nbr, wt) {
    this.src = src;
    this.nbr = nbr;
    this.wt = wt;
  }
}

class Graph {
  constructor() {
    this.graph = [];
  }
  add(src, nbr, wt) {
    this.graph.push(new Edge(src, nbr, wt));
  }
}

let graph = new Graph();
graph.add(0, 3, 40);
graph.add(0, 1, 10);

graph.add(1, 0, 10);
graph.add(1, 2, 10);

graph.add(2, 3, 10);
graph.add(2, 1, 10);

graph.add(3, 0, 40);
graph.add(3, 2, 10);
graph.add(3, 4, 2);

graph.add(4, 3, 2);
graph.add(4, 5, 3);
graph.add(4, 6, 3);

graph.add(5, 4, 3);
graph.add(5, 6, 3);

graph.add(6, 5, 3);
graph.add(6, 4, 8);
