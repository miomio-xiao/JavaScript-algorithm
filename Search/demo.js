// import BinarySearchTree from '../BinaryTree/BinarySearchTree';
// import { seqSearch } from './SeqSearch';
// import { binarySearch, binarySearchRecursion } from './BinarySearch';
const BinarySearchTree = require('../BinaryTree/BinarySearchTree');
const { seqSearch } = require('./SeqSearch');
const { binarySearch, binarySearchRecursion } = require('./BinarySearch');

/**
 * 生成长度为n的随机不重复的数组
 *
 * @param {Number} n
 * @returns Array
 */
function randomArr(n) {
  let arr = [];
  while (n) {
    let num = ~~(Math.random() * n * 10);
    if (arr.indexOf(num) < 0) {
      arr.push(num);
      n--;
    }
  }
  return arr;
}

function testBinarySearchTree(arr) {
  let tree = new BinarySearchTree();
  arr.forEach(num => tree.insertNode(num));

  console.log('\n前序遍历:');
  tree.printTree('pre');
  console.log('\n中序遍历:');
  tree.printTree();
  console.log('\n后序遍历');
  tree.printTree('post');

  console.log('\n最小的结点:', tree.min().key);
  console.log('\n最大的结点:', tree.max().key);

  let rnode = tree.searchNode(arr[10]);
  console.log('待删除结点: ', rnode.key);
  tree.removeNode(rnode);
  tree.printTree();
}

function test() {
  let n = 100000;
  let arr = randomArr(n);
  // console.log(arr);
  let num = arr[~~(Math.random() * arr.length)];
  console.log('待查找数据', num);
  console.log('顺序查找:', seqSearch(arr, num));
  let sortArr = arr.sort((a, b) => a - b);
  // console.log(sortArr);
  console.log('二分查找非递归:', binarySearch(sortArr, num));
  console.log('二分查找递归:', binarySearchRecursion(sortArr, num));
}

test();
