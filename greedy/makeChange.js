/**
 * 贪心找零
 *
 * @param {Array} coinArr 可用零钱
 * @param {Number} money 待找面额
 * @returns 找零结果
 */
function makeChange(coinArr, money) {
  // 降序排序
  coinArr.sort((a, b) => b - a);
  let result = new Map();
  for (let i = 0; i < coinArr.length; i++) {
    let curCoin = coinArr[i];
    while (money >= curCoin && money > 0) {
      result.set(curCoin, ~~(money / curCoin));
      money %= curCoin;
    }
  }
  return result;
}

module.exports = {
  makeChange
};
