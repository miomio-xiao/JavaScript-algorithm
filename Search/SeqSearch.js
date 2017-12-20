/**
 * 顺序查找
 *
 * @param {Array} arr
 * @param {any} data
 * @returns Boolean 查找结果
 */
function seqSearch(arr, data) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      return true;
    }
  }
  return false;
}

module.exports = { seqSearch };
