/**
 * 生成长度为n的随机不重复的数组
 *
 * @param {Number} n
 * @returns Array
 */
function randomArr(n) {
  let arr = [];
  while (n) {
    let num = ~~(Math.random() * n * 10);
    if (arr.indexOf(num) < 0) {
      arr.push(num);
      n--;
    }
  }
  return arr;
}

/**
 * 生成长度为n的随机可重复的数组
 *
 * @param {Number} n
 * @returns Array
 */
function randomArrN(n) {
  let arr = [];
  while (n) {
    let num = ~~(Math.random() * n * 10);
    arr.push(num);
    n--;
  }
  return arr;
}

module.exports = {
  randomArr,
  randomArrN
};
