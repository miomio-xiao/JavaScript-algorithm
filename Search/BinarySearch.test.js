const assert = require('assert');
const { binarySearch, binarySearchRecursion } = require('./BinarySearch');
const { randomArr } = require('../utils');

const arr = [1, 2, 4, 6, 7, 11];

it('binarySearch should return -1', () => {
  let result = binarySearch(arr, 5);
  assert.equal(result, -1);
});

it('binarySearch should return 2', () => {
  let result = binarySearch(arr, 4);
  assert.equal(result, 2);
});

it('binarySearchRecursion should return -1', () => {
  let result = binarySearchRecursion(arr, 5);
  assert.equal(result, -1);
});

it('binarySearchRecursion should return 2', () => {
  let result = binarySearchRecursion(arr, 4);
  assert.equal(result, 2);
});
