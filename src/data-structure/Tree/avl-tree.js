class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVL {
  constructor(value) {
    this.root = new Node(value);
  }

  insert(value) {
    // console.log(this.root);
    let newNode = new Node(value);

    const insertNode = (node) => {
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          insertNode(node.left);
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          insertNode(node.right);
        }
      }
    };
    insertNode(this.root);
  }

  height(node) {
    if (node === null) {
      return 0;
    }
    return node.height;
  }

  balancingFactor(node) {
    if (node === null) {
      return 0;
    }
    return height(node.left) - height(node.right);
  }

  rightRotation(c) {
    let b = c.left;
    let T3 = b.right;

    // Rotate
    b.right = c;
    c.left = T3;

    // height update
    c.height = Math.max(height(c.left), this.height(c.right)) + 1;
    b.height = Math.max(height(b.left), height(b.right)) + 1;

    return b;
  }

  display() {
    const traverse = (node) => {
      if (node === null) {
        return;
      }
      let str = '';
      if (node.left) {
        str += node.left.value;
      } else {
        str += '•';
      }

      str += ` => ${node.value} <= `;
      if (node.right) {
        str += node.right.value;
      } else {
        str += '•';
      }
      console.log(str);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
  }
}

let avl = new AVL(20);
avl.insert(25);
avl.insert(15);
avl.insert(10);
avl.insert(35);
avl.insert(30);
avl.insert(40);
avl.display();
