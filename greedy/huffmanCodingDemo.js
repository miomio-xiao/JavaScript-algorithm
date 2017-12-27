const HuffmanTree = require('./huffmanCoding');

const str =
  'a'.repeat(45) +
  'b'.repeat(13) +
  'c'.repeat(12) +
  'd'.repeat(16) +
  'e'.repeat(9) +
  'f'.repeat(5);

let hTree = new HuffmanTree(str);
try {
  const codeStr = 'abbbbbbbbbbbaaaefffffddddcaaaaafff';
  console.log('code before:', codeStr);
  let code = hTree.huffmanCoding(codeStr);
  console.log('code after:', code);
  console.log('code after length:', code.length);
  console.log('code mapping:', hTree.getMapping());
  let decode = hTree.huffmanDecoding(code);
  console.log(`decode(${decode === codeStr}):`, decode);
} catch (error) {
  console.log(error);
}
