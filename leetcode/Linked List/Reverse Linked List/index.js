/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head,
        result_list = null;
    while(current) {
        result_list = unshiftList(result_list, current.val)
        current = current.next;
    }
    return result_list;
};

const unshiftList = (node, val) => {
    if(!node) {
        return new ListNode(val);
    }
    let ele = new ListNode(val),
        current = node;
    ele.next = node;
    return ele;
}