class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const chars = [];
        const openers = ['(', '{', '['];
        const closerToOpenerMap = {
            ')': '(',
            '}': '{',
            ']': '[',
        };

        for (const char of s) {
            if (openers.includes(char)) {
                chars.push(char);
            } else if (chars.at(-1) === closerToOpenerMap[char]) {
                chars.pop();
            } else {
                return false;
            }
        }

        return chars.length === 0;
    }
}
