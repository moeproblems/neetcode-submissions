class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookup = new Map();

        let i;
        let j;

        for (let index = 0; index < nums.length; index++) {
            const num = nums[index];
            const diff = target - num;
            
            if (lookup.has(diff)) {
                i = lookup.get(diff);
                j = index;
                break;
            }

            lookup.set(num, index);
        }

        return [i, j];
    }
}
