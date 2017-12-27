const assert = require('assert');
const { makeChange } = require('./makeChange');

const arr = [1, 2, 10, 5, 20];

it('111 in [1, 2, 10, 5, 20] should return map(20->5, 10->1, 1->1)', () => {
  let result = makeChange(arr, 111);
  assert.equal(result.get(20), 5);
  assert.equal(result.get(10), 1);
  assert.equal(result.get(1), 1);
});

it('-1 in [1, 2, 10, 5, 20] should return map(empty)', () => {
  let result = makeChange(arr, -1);
  assert.deepEqual(result.keys(), []);
});

it('45.2 in [1, 2, 10, 5, 20] should return map(20->2, 5->1)', () => {
  let result = makeChange(arr, 45.2);
  assert.equal(result.get(20), 2);
  assert.equal(result.get(5), 1);
});

it('15 in [1, 5, 11] should return map(11->1, 1->4)', () => {
  let result = makeChange([1, 5, 11], 15);
  assert.equal(result.get(11), 1);
  assert.equal(result.get(1), 4);
});
