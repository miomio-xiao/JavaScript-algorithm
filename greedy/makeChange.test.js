const assert = require('assert');
const { makeChange } = require('./makeChange');

const arr = [1, 2, 10, 5, 20];

it('111 in [1, 2, 10, 5, 20] should return [20, 20, 20, 20, 20, 10, 1]', () => {
  let result = makeChange(arr, 111);
  assert.deepEqual(result, [20, 20, 20, 20, 20, 10, 1]);
});

it('-1 in [1, 2, 10, 5, 20] should return []', () => {
  let result = makeChange(arr, -1);
  assert.deepEqual(result, []);
});

it('45.2 in [1, 2, 10, 5, 20] should return [20, 20, 5]', () => {
  let result = makeChange(arr, 45.2);
  assert.deepEqual(result, [20, 20, 5]);
});

it('15 in [1, 5, 11] should return [11, 1, 1, 1, 1]', () => {
  let result = makeChange([1, 5, 11], 15);
  assert.deepEqual(result, [11, 1, 1, 1, 1]);
});
