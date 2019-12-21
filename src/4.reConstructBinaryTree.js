/*
题目描述
输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
https://www.nowcoder.com/practice/8a19cbe657394eeaac2f6ea9b0f6fcf6?tpId=13&tqId=11157&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
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