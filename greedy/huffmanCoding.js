/**
 * 树结点
 *
 * @class Node
 */
class Node {
  /**
   * Node 构造器
   * @param {any} [char=null] 字符
   * @param {number} [freq=1]  频率(权值)
   * @memberof Node
   */
  constructor(char = null, freq = 1) {
    this.char = char;
    this.freq = freq;
    this.left = null;
    this.right = null;
  }
}
/**
 *
 *
 * @class HuffmanTree
 */
class HuffmanTree {
  /**
   * HuffmanTree构造器
   * @param {String} str
   * @memberof HuffmanTree
   */
  constructor(str) {
    this.root = this.buildTree(str);
  }
  /**
   * 构建huffman tree
   *
   * @param {String} str
   * @returns root
   * @memberof HuffmanTree
   */
  buildTree(str) {
    let charArr = [];
    // 生成freq的数组
    Array.from(str).forEach(c => {
      let node = charArr.find(node => node.char === c);
      if (node) {
        node.freq += 1;
      } else {
        node = new Node(c);
        charArr.push(node);
      }
    });

    // 贪心构建huffman tree
    while (charArr.length > 1) {
      // 以下三行寻找freq最小的两个结点
      charArr.sort((a, b) => b.freq - a.freq);
      let x = charArr.pop();
      let y = charArr.pop();
      // 生成新的node, freq为两个子结点freq之和,
      let node = new Node();
      node.left = x;
      node.right = y;
      node.freq = x.freq + y.freq;
      charArr.push(node);
    }
    // 返回剩下的根结点
    return charArr[0];
  }
  /**
   * 获取字符的 codeMap
   *
   * @returns
   * @memberof HuffmanTree
   */
  getMapping() {
    let charCodeMap = new Map();
    let code = [];
    function coding(node, len) {
      // 空结点返回
      if (!node) {
        return;
      }
      // 叶子结点
      if (!node.left && !node.right) {
        charCodeMap.set(node.char, code.join(''));
      } else {
        // 递归左右子树, 需要清空code数组len后面的字符, 在len的位置左->0 右->1
        code.splice(len, code.length - len, 0);
        coding(node.left, len + 1);
        code.splice(len, code.length - len, 1);
        coding(node.right, len + 1);
      }
    }
    coding(this.root, 0);
    return charCodeMap;
  }
  /**
   * 编码
   *
   * @param {String} 待编码字符串
   * @returns 编码后字符串
   * @memberof HuffmanTree
   */
  huffmanCoding(str) {
    let charCodeMap = this.getMapping();
    // 遍历每个字符, 获取code合成编码后字符串
    let code = Array.from(str).reduce((pre, cur) => {
      if (!charCodeMap.has(cur)) {
        throw new Error(`coding error: ${cur} not in mapping`);
      }
      return pre + charCodeMap.get(cur);
    }, '');
    return code;
  }
  /**
   * 解码
   *
   * @param {String} code 待解码字符串
   * @returns 解码后字符串
   * @memberof HuffmanTree
   */
  huffmanDecoding(code) {
    let str = '';
    let codeArr = Array.from(code);
    while (codeArr.length > 0) {
      let node = this.root;
      // 每次从根结点开始, 直到遍历到叶子节点, 0 -> 左子树  1 -> 右子树
      while (node.left || node.right) {
        let c = codeArr.shift();
        if (c === '0') {
          node = node.left;
        } else if (c === '1') {
          node = node.right;
        } else {
          throw new Error('decoding error');
        }
      }
      str += node.char;
    }
    return str;
  }
}

module.exports = HuffmanTree;
