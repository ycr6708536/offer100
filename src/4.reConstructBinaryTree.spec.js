
const {reConstructBinaryTree, TreeNode} = require('./4.reConstructBinaryTree')

test('输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}', () => {
    const head = new TreeNode(1)
    head.left = new TreeNode(2)
    head.left.left = new TreeNode(4)
    head.left.left.right = new TreeNode(7)
    head.right = new TreeNode(3)
    head.right.left = new TreeNode(5)
    head.right.right = new TreeNode(6)
    head.right.right.left = new TreeNode(8)

    expect(reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6])).toEqual(head)
})
