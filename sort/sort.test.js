const { QuickSort } = require('./QuickSort');
const { mergeSort } = require('./MergeSort');
const { randomArrN } = require('../utils');

const arr = randomArrN(10000000);

let a1 = arr.slice();
let a2 = arr.slice();

console.time('QuickSort');
QuickSort(a1);
console.timeEnd('QuickSort');

console.time('mergeSort');
mergeSort(a2);
console.timeEnd('mergeSort');
