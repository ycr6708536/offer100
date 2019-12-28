/*
题目描述
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4?tpId=13&tqId=11161&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
* */
/**
 *
 * @param {Number} number
 */
function jumpFloor(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;
  if (number === 2) return 2;
  let one = 1
  let two = 2

  for (let i = 3;i<=number;i++){
    let tmp = one + two
    one = two
    two = tmp
  }

  return two
}

module.exports = {
  jumpFloor: jumpFloor,
};
