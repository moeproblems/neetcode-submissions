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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        console.log(list1, list2);
        if (!list1 && !list2) {
            return new ListNode('');
        }

        let myList;
        let myListCurr;
        let list1Curr = list1;
        let list2Curr = list2;

        while (list1Curr || list2Curr) {
            if (!list1Curr) {
                if (!myList) {
                    myList = list2Curr;
                    myListCurr = myList;
                    list2Curr = list2Curr.next;
                    continue;
                }

                myListCurr.next = list2Curr;
                myListCurr = myListCurr.next;
                list2Curr = list2Curr.next;
                continue;
            }

            if (!list2Curr) {
                if (!myList) {
                    myList = list1Curr;
                    myListCurr = myList;
                    list1Curr = list1Curr.next;
                    continue;
                }

                myListCurr.next = list1Curr;
                myListCurr = myListCurr.next;
                list1Curr = list1Curr.next;
                continue;
            }

            if (list1Curr.val < list2Curr.val) {
                if (!myList) {
                    myList = list1Curr;
                    myListCurr = myList;
                    list1Curr = list1Curr.next;
                    continue;
                }

                myListCurr.next = list1Curr;
                myListCurr = myListCurr.next;
                list1Curr = list1Curr.next;
                continue;
            }

            if (list1Curr.val > list2Curr.val) {
                if (!myList) {
                    myList = list2Curr;
                    myListCurr = myList;
                    list2Curr = list2Curr.next;
                    continue;
                }

                myListCurr.next = list2Curr;
                myListCurr = myListCurr.next;
                list2Curr = list2Curr.next;
                continue;
            }

            if (!myList) {
                myList = list1Curr;
                myListCurr = myList;
                list1Curr = list1Curr.next;
                continue;
            }

            myListCurr.next = list1Curr;
            myListCurr = myListCurr.next;
            list1Curr = list1Curr.next;            
        }

        return myList;
    }
}
