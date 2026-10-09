class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        if (arr.length === 1) {
            return [-1];
        }

        const result = new Array(arr.length);

        result[arr.length - 1] = -1;

        let seenMax = -1;

        for (let i = arr.length - 2; i >= 0; i--) {
            seenMax = Math.max(seenMax, arr[i + 1]);
            result[i] = seenMax;
        }

        return result;
    }
}
