class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const sandwichToStudentCount = Object.create(null);
        let result = students.length;

        for (let student of students) {
            if (!sandwichToStudentCount[student]) {
                sandwichToStudentCount[student] = 0;
            }

            sandwichToStudentCount[student]++;
        }

        for (let sand of sandwiches) {
            if (sandwichToStudentCount[sand] > 0) {
                result--;
                sandwichToStudentCount[sand]--;
            } else {
                break;
            }
        }

        return result;
    }

    /*
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
    */
}
