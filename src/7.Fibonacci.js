/*
题目描述
大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
n<=39
https://www.nowcoder.com/practice/c6c7742f5ba7442aada113136ddea0c3?tpId=13&tqId=11160&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
* */
function Fibonacci(n) {
  const map = [0, 1, 1];
  if (n <= 2) return map[n];

  let i = 3
  while (i<= n) {
      map[i] = map[i-1] + map[i-2]
      i++
  }
  return map[n]
}

module.exports = {
  Fibonacci: Fibonacci,
};
