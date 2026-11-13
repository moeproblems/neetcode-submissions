class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        while (sandwiches.length > 0 && students.indexOf(sandwiches[0]) >= 0) {
            if (students[0] === sandwiches[0]) {                
                students.shift();
                sandwiches.shift();                
            } else {
                students.push(students.shift());                
            }
        }

        return students.length;
    }
}
