// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?source=submission-noac
// 4%
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let size = 1;
    let cursor = head;
    while (cursor.next) {
        size += 1;
        cursor = cursor.next;
    }

    if (size == 1) {
        return head.next;
    }

    const target = size - n - 1;
    let i = 0;
    let tempNode;
    console.log(target)

    cursor = head;

    if (target < 0) {
        return head.next
    }

    while (cursor.next) {
        if (i === target) {
            cursor.next = cursor.next?.next || null
            break;
        }

        cursor = cursor.next;
        i += 1;
    }

    return head;
};