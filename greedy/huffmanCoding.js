/**
 * 树结点
 *
 * @class Node
 */
class Node {
  /**
   * Node 构造器
   * @param {any} code
   * @param {any} key
   * @memberof Node
   */
  constructor(code = null, key = 1) {
    this.code = code;
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class HuffmanTree {
  constructor(str) {
    this.root = this.buildTree(str);
  }

  buildTree(str) {
    let codeArr = [];
    Array.from(str).forEach(c => {
      let node = codeArr.find(node => node.code === c);
      if (node) {
        node.key += 1;
      } else {
        node = new Node(c);
        codeArr.push(node);
      }
    });

    while (codeArr.length > 1) {
      codeArr.sort((a, b) => b.key - a.key);
      let node = new Node();
      let x = codeArr.pop();
      let y = codeArr.pop();
      node.left = x;
      node.right = y;
      node.key = x.key + y.key;
      codeArr.push(node);
    }
    return codeArr[0];
  }

  huffmanCoding() {
    let codeArr = [];
    let str = [];
    function coding(node, len) {
      if (!node) {
        return;
      }
      if (!node.left && !node.right) {
        codeArr.push({
          code: node.code,
          key: node.key,
          str: str.join('')
        });
      } else {
        str[len] = 0;
        coding(node.left, len + 1);
        str[len] = 1;
        coding(node.right, len + 1);
      }
    }
    coding(this.root, 0);
    return codeArr;
  }
}

let str =
  'a'.repeat(45) +
  'b'.repeat(13) +
  'c'.repeat(12) +
  'd'.repeat(16) +
  'e'.repeat(9) +
  'f'.repeat(5);

let hTree = new HuffmanTree(str);
console.log(hTree);
let codeArr = hTree.huffmanCoding();
console.log(codeArr);
