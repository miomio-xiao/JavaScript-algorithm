/**
 * 二分查找非递归形式
 *
 * @export
 * @param {Array} arr
 * @param {any} data
 * @returns Number 成功返回在数组中的位置，失败返回-1
 */
function binarySearch(arr, data) {
  let high = arr.length - 1;
  let low = 0;
  let mid;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (arr[mid] < data) {
      low = mid + 1;
    } else if (arr[mid] > data) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

/**
 * 二分查找递归形式
 *
 * @export
 * @param {Array} arr
 * @param {any} data
 * @returns Number 成功返回在数组中的位置，失败返回-1
 */
function binarySearchRecursion(arr, data) {
  function recursion(data, low, high) {
    if (low > high) {
      return -1;
    }
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === data) {
      return mid;
    }
    if (arr[mid] > data) {
      return recursion(data, low, mid - 1);
    }
    if (arr[mid] < data) {
      return recursion(data, mid + 1, high);
    }
  }
  return recursion(data, 0, arr.length - 1);
}

module.exports = {
  binarySearch,
  binarySearchRecursion
};
