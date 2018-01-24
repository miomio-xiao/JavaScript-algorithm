const assert = require('assert');
const { QuickSort, Quick3Sort, sortEs } = require('./QuickSort');
const { randomArrN } = require('../utils');

const arr = randomArrN(50000000);

let a1 = arr.slice();
let a2 = arr.slice();
let a3 = arr.slice();
let a4 = arr.slice();

console.time('qs');
QuickSort(a1);
console.timeEnd('qs');

console.time('qs3');
QuickSort(a3);
console.timeEnd('qs3');

// console.time('qsES6');
// sortEs(a2);
// console.timeEnd('qsES6');

console.time('qsPrototype');
a4.sort((a, b) => a - b);
console.timeEnd('qsPrototype');
