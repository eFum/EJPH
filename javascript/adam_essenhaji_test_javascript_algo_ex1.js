//q1 - Initialize a 9x9 2D array
var to_verify = [...Array(9)].map(e => Array(9));

//q2 (F11) - Function to read the Sudoku grid from a table of digits
// The table_digits parameter is expected to be an array of strings, where each string represents a row in the Sudoku grid
function readTable(table_digits) {
    // Split each row string into an array of numbers
    return table_digits.map(row => row.split(' ').map(Number));
}

//q3 (F12) - Function to display the Sudoku grid on main.htm
// The to_verify parameter is expected to be a 2D array representing the Sudoku grid
function displayGrid(to_verify) {
    // Get the 'sudokuGrid' element from the DOM
    var table = document.getElementById('sudokuGrid');
    // Loop through each row in the Sudoku grid
    for (var i = 0; i < to_verify.length; i++) {
        // Create a new table row
        var row = document.createElement('tr');
        // Loop through each cell in the row
        for (var  j = 0; j < to_verify[i].length; j++) {
            // Create a new table cell
            var cell = document.createElement('td');
            // Set the cell's text to the value in the Sudoku grid
            cell.textContent = to_verify[i][j];
            // Append the cell to the row
            row.appendChild(cell);
        }
        // Append the row to the table
        table.appendChild(row);
    }
}

// Function to run when the webpage loads
window.onload = function() {
    //q4 (use F11) - Read the Sudoku grid from the 'array_number' variable
    to_verify = readTable(array_number);
    //q4 (use F12) - Display the Sudoku grid on main.htm
    displayGrid(to_verify);

    //Ex3 q5 - Verify the lines, columns, and regions in the Sudoku grid
    var isLineTrue      = verifyLine(to_verify);
    var isColumnTrue    = verifyColumn(to_verify);
    var isRegionTrue    = verifyRegion(to_verify);

    // If all lines, columns, and regions are valid
    if (isLineTrue && isColumnTrue && isRegionTrue) {
        // Remove the 'errorGrid' element from the DOM
        var table = document.getElementById('errorGrid');
        table.remove();
        // Get the 'correctGrid' element from the DOM
        var div = document.getElementById('correctGrid');
        // Set the text of the 'correctGrid' element to indicate that the Sudoku grid is correct
        div.textContent = '➔ the table is correct';
    }
};
