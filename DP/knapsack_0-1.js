const weights = [2, 2, 6, 5, 4];
const values = [6, 3, 5, 4, 6];
const W = 10;

/**
 * 0-1 背包问题, DP实现
 * 状态转移方程:
 * f(i, j) = {
 *   f(i - 1, j)                                     , j < w[i]
 *   max{ f(i - 1, j), f(i - 1, j - w[i]) + v[i] }   , j >= w[i]
 * }
 *
 * @param {Array} weights 质量数组
 * @param {Array} values 价值数组
 * @param {Number} W 背包容量
 * @returns [maxValues, selected] 最大价值, 选择的物品数组
 */
function knapsack(weights, values, W) {
  const len = weights.length;
  let f = new Array(len);
  // 填充-1行置0
  f[-1] = new Array(W + 1).fill(0);

  for (let i = 0; i < len; i++) {
    f[i] = [];
    for (let j = 0; j <= W; j++) {
      if (j < weights[i]) {
        f[i][j] = f[i - 1][j];
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i]);
      }
    }
  }
  console.log(f);

  // 获取选择的物品
  let selected = [];
  let j = W;
  let w = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (f[i][j] > f[i - 1][j]) {
      selected.push(i);
      console.log(`${i}: weights: ${weights[i]}, values: ${values[i]}`);
      j -= weights[i];
      w += weights[i];
    }
  }
  return [f[len - 1][W], selected];
}

let [maxValues, selected] = knapsack(weights, values, W);
console.log(maxValues, selected);

/**
 * 一维数组压缩空间方法
 * 状态转移方程: f(j) = max{f(j), f(j - weight[i]) + values[i]} & j = W ... 0
 *
 * @param {Array} weights
 * @param {Array} values
 * @param {Number} W
 * @returns maxValues
 */
function knapsackSpace(weights, values, W) {
  const len = weights.length;
  let f = new Array(W + 1).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = W; j >= weights[i]; j--) {
      f[j] = Math.max(f[j], f[j - weights[i]] + values[i]);
    }
  }
  return f[W];
}
const result = knapsackSpace(weights, values, W);
console.log(result);
