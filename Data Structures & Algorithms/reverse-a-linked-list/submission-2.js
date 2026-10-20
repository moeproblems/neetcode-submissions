/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head || !head.next) {
            return head;
        }

        let current = head.next;
        let prev = head;
        prev.next = null;
        
        while (current !== null) {
            const newCurrentNode = current.next;
            const newPrevNode = current;
            
            current.next = prev;
            prev = newPrevNode;
            current = newCurrentNode;
        }

        return prev;
    }
}
