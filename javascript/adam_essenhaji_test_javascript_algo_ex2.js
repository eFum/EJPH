//q1 (F21) - Function to verify if an array is valid for Sudoku
function verifyArray(table) {
    //q3 -  If the length of the array is not 9, return false
    //q2 - This is because each row, column, and region in Sudoku should contain 9 numbers
    if (table.length !== 9) {
        return false;
    }

    // Initialize a Set to store unique numbers
    // A Set in JavaScript is a collection of unique values
    var uniqueNumbers = new Set();

    // Loop through each number in the array
    for (var i = 0; i < table.length; i++) {
        // Convert the current element to a number
        var num = Number(table[i]);

        //q3 -  If the current element is not a number, or is less than 1, or is greater than 9, return false
        //q2 -  This is because each number in Sudoku should be between 1 and 9
        if (isNaN(num) || num < 1 || num > 9) {
            return false;
        }

        // Add the current number to the Set of unique numbers
        uniqueNumbers.add(num);
    }

    //q3 -  If the size of the Set of unique numbers is not 9, return false
    //q2 -  This is because each row, column, and region in Sudoku should contain all numbers from 1 to 9 exactly once
    if (uniqueNumbers.size !== 9) {
        return false;
    }

    //q3 - If all checks pass, return true
    return true;
}
