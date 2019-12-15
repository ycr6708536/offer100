
const {printListFromTailToHead} = require('./3.printListFromTailToHead')

function ListNode(x){
    this.val = x;
    this.next = null;
}

test('We Are Happy', () => {
    var head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    expect(printListFromTailToHead(head)).toEqual([4,3,2,1])
})
