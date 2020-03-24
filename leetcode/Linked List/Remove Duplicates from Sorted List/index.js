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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let obj = {},
        current = head,
        result_list = new ListNode('1');
    while(current) {
        if(!obj[current.val]) {
            result_list = listAppend(result_list, current.val);
        }
        obj[current.val] = true;
        current = current.next;

    }
    return result_list.next;
};


const listAppend = (node, val) => {
    if(!node) {
        node = new ListNode(val);
        return node;
    }
    let element = new ListNode(val);
    let current = node;
    while(current.next) {
        current = current.next;
    }
    current.next = element;
    return node;
}