/**
 * 树节点
 * 
 * @class Node
 */
class Node {
  /**
   * Node 构造器
   * @param {any} key 
   * @memberof Node
   */
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

/**
 * 二叉搜索树
 * 
 * @class BinarySearchTree
 */
class BinarySearchTree {

  /**
   * BinarySearchTree 构造器
   * @memberof BinarySearchTree
   */
  constructor() {
    this.root = null;
  }

  /**
   * 插入一个树节点
   * 
   * @param {any} key 
   * @memberof BinarySearchTree
   */
  insertNode(key) {
    let node = new Node(key);
    // curParent 待插入节点的父节点
    let curParent = null;
    // curNode 节点待插入的位置
    let curNode = this.root;

    // 循环查找节点的插入位置
    while (curNode) {
      // 每次循环curParent始终指向父节点，curNode根据key值向左还是向右下降直到为空
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
    node.parent = curParent;
  }

  /**
   * 从树中查找一个节点
   * 
   * @param {any} key 
   * @returns Node
   * @memberof BinarySearchTree
   */
  searchNode(key) {
    /**
     * 递归子树查找节点
     * 
     * @param {Node} node 当前子树根节点
     * @param {any} key 
     * @returns Node
     */
    function search(node, key) {
      // 输出查找的路线
      console.log(node.key);

      // 找到节点或者为null时返回
      if (!node || node.key === key) {
        return node;
      }

      if (key < node.key) {
        // 递归左子树
        return search(node.left, key);
      } else {
        // 递归右子树
        return search(node.right, key);
      }
    }

    return search(this.root, key);
  }

  /**
   * 寻找最小key的节点
   * 二叉查找树的特点: 最小节点没有左孩子
   * 
   * @returns Node
   * @memberof BinarySearchTree
   */
  min() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  /**
   * 寻找最大key的节点
   * 二叉查找树的特点: 最大节点没有右孩子
   * 
   * @returns Node
   * @memberof BinarySearchTree
   */
  max() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node;
  }

  /**
   * 寻找给定节点的中序后继
   * 1. 如果右子树非空，则后继为右子树的最小节点
   * 2. 如果右子树为空，为了找到其后继，从结点 x 开始向上查找，直到遇到一个祖先结点 y，它的左儿子也是结点 x 的祖先，则结点 y 就是结点 x 的后继
   * 
   * @param {Node} node 
   * @returns node
   * @memberof BinarySearchTree
   */
  successor(node) {
    if (node.right) {
      return this.min(node.right);
    }
    let parent = node.parent;
    while (parent && parent.right === node) {
      node = parent;
      parent = parent.parent;
    }
    return parent;
  }
  /**
   * 删除节点
   * 1. 若被删除结点 z 是叶子结点，则直接删除，不会破坏二叉查找树的性质；
   * 2. 若结点 z 只有左子树或只有右子树，则让 z 的子树成为 z 父结点的子树，替代 z 的位置；
   * 3. 若结点 z 既有左子树，又有右子树，则用 z 的后继（Successor）代替 z，然后从二叉查找树中删除这个后继，这样就转换成了第一或第二种情况。
   * @param {Node} node 
   * @memberof BinarySearchTree
   */
  removeNode(node) {
    const remove = (node) => {
      if (!node.left && !node.right) {
        // node为叶子节点
        if (node.parent) {
          if (node.parent.left === node) {
            node.parent.left = null;
          } else {
            node.parent.right = null;
          }
        } else {
          this.root = null;
        }
      } else if (node.left && !node.right) {
        // 右子树为空
        node.left.parent = node.parent;
        if (node.parent) {
          node.parent.left === node ? node.parent.left = node.left : node.parent.right = node.left;
        } else {
          this.root = node.left;
        }
      } else if (!node.left && node.right) {
        // 左子树为空
        node.right.parent = node.parent;
        if (node.parent) {
          node.parent.left === node ? node.parent.right = node.right : node.parent, right = node.right;
        } else {
          this.root = node.right;
        }
      } else {
        // 左右都有
        // 找到后继节点
        let successorNode = this.successor(node);
        // 用后继节点的key替换
        node.key = successorNode.key;
        // 转换为1或者2的情况
        remove(successorNode);
      }
    }
    remove(node);
  }

  /**
   * 打印二叉树
   * 
   * @param {String=} type 输出顺序 pre、in、post
   * @memberof BinarySearchTree
   */
  printTree(type = 'in') {
    /**
     * 前序遍历
     * 
     * @param {Node} node 
     */
    function preOrder(node) {
      if (node) {
        process.stdout.write(node.key + ',');
        preOrder(node.left);
        preOrder(node.right);
      }
    }
    /**
     * 中序遍历
     * 
     * @param {Node} node 
     */
    function inOrder(node) {
      if (node) {
        inOrder(node.left);
        process.stdout.write(node.key + ',');
        inOrder(node.right);
      }
    }
    /**
     * 后序遍历
     * 
     * @param {Node} node 
     */
    function postOrder(node) {
      if (node) {
        postOrder(node.left);
        postOrder(node.right);
        process.stdout.write(node.key + ',');
      }
    }

    if (type === 'pre') {
      preOrder(this.root);
    } else if (type === 'post') {
      postOrder(this.root);
    } else {
      inOrder(this.root);
    }
  }
}

/**
 * 生成长度为n的随机不重复的数组
 * 
 * @param {Number} n 
 * @returns Array
 */
function randomArr(n) {
  let arr = [];
  while (n) {
    let num = ~~(Math.random() * 100);
    if (arr.indexOf(num) < 0) {
      arr.push(num);
      n--;
    }
  }
  return arr;
}

let arr = randomArr(20);
console.log(arr);
let tree = new BinarySearchTree();
arr.forEach(num => tree.insertNode(num));

console.log('\n前序遍历:');
tree.printTree('pre');
console.log('\n中序遍历:');
tree.printTree();
console.log('\n后序遍历');
tree.printTree('post');

console.log('\n最小的节点:', tree.min().key);
console.log('\n最大的节点:', tree.max().key);

let rnode = tree.searchNode(arr[10]);
console.log('待删除节点: ', rnode.key);
tree.removeNode(rnode);
tree.printTree();