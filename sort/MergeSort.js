/**
 * 归并排序
 *
 * @param {Array} arr
 * @returns {Array}
 */
function mergeSort(arr) {
  /**
   * 合并两个有序数组
   *
   * @param {Array} left
   * @param {Array} right
   * @returns {Array}
   */
  function merge(left, right) {
    let i = left.length - 1;
    let j = right.length - 1;
    let n = i + j + 1;
    while (j >= 0) {
      left[n--] = i >= 0 && left[i] > right[j] ? left[i--] : right[j--];
    }
    return left;
  }
  /**
   * 拆分数组然后合并
   *
   * @param {Array} arr
   * @returns
   */
  function slice(arr) {
    const len = arr.length;
    if (len <= 1) {
      return arr;
    }
    // 中间开始拆分
    const m = Math.floor(len / 2);
    const left = arr.slice(0, m);
    const right = arr.slice(m, len);
    return merge(slice(left), slice(right));
  }
  return slice(arr);
}

// console.log(mergeSort([1, 8, 6, 9, 8, 1, 10, 15, 14, 14]));

module.exports = {
  mergeSort
};
