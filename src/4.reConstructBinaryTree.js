/*
题目描述
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

https://www.nowcoder.com/practice/54275ddae22f475981afa2244dd448c6?tpId=13&tqId=11158&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
* */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTreeIndex(pre,pStart,pEnd,vin,vStart,vEnd) {
    if (pStart>pEnd || vStart>vEnd) {
        return null
    }

    var root = new TreeNode(pre[pStart])

    for(var i = vStart;i<=vEnd;i++){
        if(vin[i] === pre[pStart]){
            var leftLength = i-vStart
            root.left = reConstructBinaryTreeIndex(pre,pStart+1,pStart+leftLength,vin,vStart,i-1)
            root.right = reConstructBinaryTreeIndex(pre,pStart+leftLength+1,pEnd,vin,i+1,vEnd)
        }
    }

    return root

}

function reConstructBinaryTree(pre, vin)
{
    return reConstructBinaryTreeIndex(pre,0,pre.length -1,vin,0,vin.length-1)
}

module.exports = {
    TreeNode: TreeNode,
    reConstructBinaryTree : reConstructBinaryTree
};