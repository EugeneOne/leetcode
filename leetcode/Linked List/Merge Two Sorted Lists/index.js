/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    let current_l1 = l1,
        current_l2 = l2;
    let result_list = null;
    while(!(current_l1 === null && current_l2 === null)) {
        if(!current_l2 || (current_l1 && current_l1.val < current_l2.val)) {
            result_list = listAppend(result_list, current_l1.val);
            current_l1 = current_l1.next;
        } else {
            result_list = listAppend(result_list, current_l2.val);
            current_l2 = current_l2.next;
        }
    }

    return result_list;
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