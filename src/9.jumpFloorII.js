/*
题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
https://www.nowcoder.com/practice/22243d016f6b47f2a6928b4313c85387?tpId=13&tqId=11162&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
* */

/**
 *
 * @param {Number} n
 */
function jumpFloorII(n) {
  let count = 0;
  const origin = n;

  for (; n > 0; n--) {
    if (origin === n || n === 1) {
      count += 1;
      continue;
    }

    count += Math.pow(2, origin - n);
  }
  return count;
}

module.exports = {
  jumpFloorII: jumpFloorII,
};
