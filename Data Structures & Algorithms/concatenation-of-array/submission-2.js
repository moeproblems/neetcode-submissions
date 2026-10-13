class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // Option1:
        // return nums.concat(nums);
        
        // Option 2:
        // const newArr = new Array(nums.length * 2);

        // for (let i = 0; i < newArr.length; i++) {
        //     newArr[i] = nums[i % nums.length];
        // }

        // return newArr;

        // Option 3:
        const length = nums.length;

        for (let i = 0; i < length; i++) {
            nums.push(nums[i]);
        }

        return nums;
    }
}
