/**
输入一个链表，按链表从尾到头的顺序返回一个ArrayList

https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
 * @param {*} head 
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = []

    while(head) {
        arr.unshift(head.val)
        head = head.next
    }

    return arr
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};