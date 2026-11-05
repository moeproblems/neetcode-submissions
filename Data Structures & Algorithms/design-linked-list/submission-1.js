class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        const node = this.#getNodeAtIndex(index);

        return node?.prev ?? null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        const node = this.#getNodeAtIndex(index);

        return node?.val ?? -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.length++;

        if (!this.head) {
            this.head = { val, next: null, prev: null };
            this.tail = this.head;        
            return;
        }

        const currentHead = this.head;
        this.head.prev = { val, next: currentHead, prev: null };
        this.head = currentHead.prev;        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.length++;

        if (!this.tail) {
            this.tail = { val, prev: null, next: null };
            this.head = this.tail;
            return;
        }

        const currentTail = this.tail;
        this.tail.next = { val, prev: currentTail, next: null };
        this.tail = currentTail.next;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        if (index === this.length) {
            this.addAtTail(val);
            return;
        }

        const node = this.#getNodeAtIndex(index);

        if (!node) {
            return;
        }

        const prevNode = node.prev;
        prevNode.next = { val, prev: prevNode, next: node };
        node.prev = prevNode.next;
        this.length++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        const node = this.#getNodeAtIndex(index);

        if (!node) {
            return;
        }

        this.length--;

        if (index === 0) {
            // deleting head
            this.head = this.head.next;
            this.head.prev = null;
            return;
        }

        if (!node.next) {
            // deleting tail
            this.tail = this.tail.prev;
            this.tail.next = null;
            return;
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    #getNodeAtIndex(index) {
        if (!this.head) {
            return -1;
        }

        let node = this.head;

        for (let i = 0; i < index; i++) {
            if (!node) {
                break;
            }

            node = node.next;
        }

        return node;
    }
}
