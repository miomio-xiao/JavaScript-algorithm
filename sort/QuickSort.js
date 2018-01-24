/**
 * 快排(两路) 时间复杂度O(nlogn)
 * 
 * @param {Array} arr 
 * @param {number} [l=0] 
 * @param {number} [r=arr.length - 1] 
 * @returns 
 */
function QuickSort(arr, l = 0, r = arr.length - 1) {
  if (l > r) return;
  let i = l;
  let j = r + 1;
  let p = arr[i];
  while (i < j) {
    while (i < j && arr[--j] >= p);
    if (i < j) {
      arr[i] = arr[j];
    }
    while (i < j && arr[++i] < p);
    if (i < j) {
      arr[j] = arr[i];
    }
  }
  arr[i] = p;
  QuickSort(arr, l, i - 1);
  QuickSort(arr, i + 1, r);
  return arr;
}

/**
 * 快排(三路)
 * 
 * @param {Array} arr 
 * @param {number} [l=0] 
 * @param {number} [r=arr.length - 1] 
 * @returns 
 */
function Quick3Sort(arr, l = 0, r = arr.length - 1) {
  if (l > r) return;
  let i = l;
  let m = l + 1;
  let j = r;
  let p = arr[l];
  while (m <= j) {
    let flag = arr[m] - p;
    if (flag < 0) {
      [arr[i++], arr[m++]] = [arr[m], arr[i]];
    } else if (flag > 0) {
      [arr[j--], arr[m]] = [arr[m], arr[j]];
    } else {
      m++;
    }
  }
  Quick3Sort(arr, l, i - 1);
  Quick3Sort(arr, j + 1, r);
  return arr;
}

/**
 * es6 一行快排
 *
 * @param {any} [h, ...t]
 */
const sortEs = ([h, ...t]) =>
  h == null
    ? []
    : [...sortEs(t.filter(x => x < h)), h, ...sortEs(t.filter(x => x >= h))];

// console.log(sortEs([1, 8, 6, 9, 8, 1, 10, 15, 14, 14]));

// console.log(QuickSort([1, 8, 6, 9, 8, 1, 10, 15, 14, 14]));

// console.log(Quick3Sort([1, 8, 6, 9, 8, 1, 10, 15, 14, 14]));

module.exports = {
  QuickSort,
  Quick3Sort,
  sortEs
};
