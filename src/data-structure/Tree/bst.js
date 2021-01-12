class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  max() {
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  removeNode(value) {
    const remove = (node, value) => {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = remove(node.left, value);
      } else if (value > node.value) {
        node.right = remove(node.right, value);
      } else {
        if (node.left !== null && node.right !== null) {
          let leftMax = this.max(node.left);
          node.value = leftMax;
          node.left = remove(node.left, leftMax);
          return node;
        } else if (node.left !== null) {
          return node.left;
        } else if (node.right !== null) {
          return node.right;
        } else {
          return null;
        }
      }

      return node;
    };
    remove(this.root, value);
  }

  // left, root, right
  dfsInOrder() {
    let results = [];

    const traverse = (node) => {
      // if left child exists, go left
      if (node.left) traverse(node.left);

      // capture node value
      results.push(node.value);

      // if right child exists, go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return results;
  }

  // root, left, right
  dfsPreOrder() {
    let results = [];

    const traverse = (node) => {
      // capture node value
      results.push(node.value);

      // if left child exists, go left
      if (node.left) traverse(node.left);

      // if right child exists, go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return results;
  }

  // left, right, root
  dfsPostOrder() {
    let results = [];

    const traverse = (node) => {
      // if left child exists, go left
      if (node.left) traverse(node.left);

      // if right child exists, go right
      if (node.right) traverse(node.right);

      // capture node value
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  // level order
  // using queue
  bfs() {
    const results = [];
    const queue = [];

    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return results;
  }
}

const bst = new BST(15);
bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);
console.log(bst.dfsInOrder());
bst.removeNode(28);
bst.removeNode(36);
console.log(bst.dfsInOrder());
console.log(bst.size());
console.log(bst.min());
console.log(bst.max());
console.log(bst.contains(12));
console.log(bst.contains(25));
console.log(bst.dfsInOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsPreOrder());
console.log(bst.bfs());
