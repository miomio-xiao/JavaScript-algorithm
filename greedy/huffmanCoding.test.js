const assert = require('assert');
const HuffmanTree = require('./huffmanCoding');

const str =
  'a'.repeat(45) +
  'b'.repeat(13) +
  'c'.repeat(12) +
  'd'.repeat(16) +
  'e'.repeat(9) +
  'f'.repeat(5);

it('aabbcf coding should be 001011011001100', () => {
  const codeStr = 'aabbcf';
  let hTree = new HuffmanTree(str);
  assert.equal(hTree.huffmanCoding(codeStr), '001011011001100');
});

it('001011011001100 decoding should be aabbcf', () => {
  const codeStr = '001011011001100';
  let hTree = new HuffmanTree(str);
  assert.equal(hTree.huffmanDecoding(codeStr), 'aabbcf');
});

it('coding decoding should be equal', () => {
  const codeStr = 'aaaaabaadddddddddddffffffffffeee';
  let hTree = new HuffmanTree(str);
  assert.equal(hTree.huffmanDecoding(hTree.huffmanCoding(codeStr)), codeStr);
});

it('coding error code string should be throws error', () => {
  const codeStr = 'aaaaabaadddddddddddffsffffffffeee';
  let hTree = new HuffmanTree(str);
  assert.throws(() => hTree.huffmanCoding(codeStr), /coding error/);
});

it('decoding error code string should be throws error', () => {
  const codeStr = '0121321311111111111';
  let hTree = new HuffmanTree(str);
  assert.throws(() => hTree.huffmanDecoding(codeStr), /decoding error/);
});
