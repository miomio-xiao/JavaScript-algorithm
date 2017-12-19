class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insertNode(key) {
    let node = new Node(key);
    let curParent = null;
    let curNode = this.root;
    while (curNode) {
      curParent = curNode;
      if (node.key < curNode.key) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    if (!curParent) {
      this.root = node;
    } else if (node.key < curParent.key) {
      curParent.left = node;
    } else {
      curParent.right = node;
    }
  }

  searchNode(key) {
    function recursion(node, key) {
      if (!node || node.key === key) {
        return node;
      }
      console.log(node.key);
      if (key < node.key) {
        return recursion(node.left, key);
      } else {
        return recursion(node.right, key);
      }
    }
    return recursion(this.root, key);
  }

  printTree() {
    function recursion(node) {
      if (node) {
        recursion(node.left);
        // console.log(node.key);
        process.stdout.write(node.key + ',');
        recursion(node.right);
      }
    }
    recursion(this.root);
  }
}

function randomArr(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let num = ~~(Math.random() * 100);
    arr.push(num);
  }
  return arr;
}

let arr = randomArr(20);
console.log(arr);
let tree = new BST();
arr.forEach(num => tree.insertNode(num));

tree.printTree();
console.log('');
console.log(tree.searchNode(23));