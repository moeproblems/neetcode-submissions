class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // return nums.concat(nums);
        const newArr = new Array(nums.length * 2);

        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = nums[i % nums.length];
        }

        return newArr;
    }
}
