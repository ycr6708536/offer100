/**
 * 题目描述
    在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 * @param {*} target 
 * @param {*} array 
 */


function Find(target, array) {
  var columns = array.length;
  // 列为0 返回false
  if (columns === 0) return false;
  var rows = array[0].length;
  // array[0] 第一行 行数为0 返回false
  if (rows === 0) return false;
  // 初始化为0
  var x = (y = 0);

  while (x < rows && y < columns) {
    if (array[y][x] === target) {
      return true;
      // 先横向移动
    } else if (array[y][x] < target) {
      // 到了最后一列 y+1 或者 x+1 和 y+1均大于target
      if (
        x + 1 === rows ||
        (array[y][x + 1] > target && array[y + 1][x] > target)
      ) {
        // 重置 x 坐标相当于数组删除第一行
        x = 0;
        y += 1;
      } else {
        if (array[y][x + 1] > target) {
          y += 1;
        } else {
          x += 1;
        }
      }
    } else {
      // 这个值大于target 肯定没有
      return false;
    }
  }
}
module.exports = {
  Find: Find,
};
