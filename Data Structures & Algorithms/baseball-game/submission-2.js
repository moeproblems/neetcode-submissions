class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const result = [];

        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];

            if (operation === '+') {
                result.push(result.at(-1) + result.at(-2));
            } else if (operation === 'D') {
                result.push(result.at(-1) * 2);
            } else if (operation === 'C') {
                result.pop();
            } else {
                result.push(Number(operation));
            }

            console.log(result);
        }

        return result.reduce((acc, num) => acc + num, 0);
    }
}
