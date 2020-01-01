/*
题目描述
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
https://www.nowcoder.com/practice/72a5a919508a4251859fb2cfb987a0e6?tpId=13&tqId=11163&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
* */
/**
 * 
 * @param {Number} number 
 */
function rectCover(number) {
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
    rectCover: rectCover,
}