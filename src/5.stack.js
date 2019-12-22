/*
题目描述
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking

* */

var stack1 = []
var stack2 = []

function push(node)
{
    stack1.push(node)
}
function pop()
{
    while (stack1.length>0) {
        stack2.push(stack1.pop())
    }

    var result = stack2.pop()

    while(stack2.length>0) {
        stack1.push(stack2.pop())
    }
   return result
}
module.exports = {
    push : push,
    pop : pop
};