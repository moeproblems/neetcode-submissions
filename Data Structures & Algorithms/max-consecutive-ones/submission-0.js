class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        return nums.join('').match(/1*/g).sort((a, b) => b.length - a.length).shift().length;
    }
}
