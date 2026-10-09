class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const initialLength = nums.length;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums.splice(i--, 1);
            }
        }

        nums.sort((a, b) => a - b);
        
        return nums.length;
    }
}
