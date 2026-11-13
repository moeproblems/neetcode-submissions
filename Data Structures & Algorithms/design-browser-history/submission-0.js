class DoubleLinkedList {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.currentSite = new DoubleLinkedList(homepage);        
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const current = this.currentSite;
        const site = new DoubleLinkedList(url, current);
        current.next = site;
        this.currentSite = site;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {        
        while (this.currentSite.prev && steps-- > 0) {            
            this.currentSite = this.currentSite.prev;            
        }

        return this.currentSite.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        let i = 1;
        while (this.currentSite.next && i++ <= steps) {
            this.currentSite = this.currentSite.next;
        }

        return this.currentSite.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
