//q1 (F31) - Function to verify each line in the Sudoku grid
function verifyLine(to_check) {
    var isTrue = true; // Initialize a flag to true
    //q4 - Loop through each line
    for (var i = 0; i < to_check.length; i++) {
        // If the line is not valid
        if (!verifyArray(to_check[i])) {
            // Get the errorGrid element from the DOM
            var table = document.getElementById('errorGrid');
            // Create a new row
            var row = document.createElement('tr');
            // Create a new cell
            var cell = document.createElement('td');
            // Set the cell's text to indicate the incorrect line
            cell.textContent = 'Line ' + (i + 1) + ' incorrect ';
            // Append the cell to the row
            row.appendChild(cell);
            // Loop through each cell in the line
            for (var  j = 0; j < to_check[i].length; j++) {
                // Create a new cell
                var cell = document.createElement('td');
                // Set the cell's text to the value in the line
                cell.textContent = to_check[i][j];
                // Append the cell to the row
                row.appendChild(cell);
            }
            // Append the row to the table
            table.appendChild(row);
            // Set the flag to false
            isTrue = false;
        }
    }
    // Return the flag
    return isTrue;
}

//q2 (F32) - Function to verify each column in the Sudoku grid
function verifyColumn(to_check) {
    var isTrue = true; // Initialize a flag to true
    //q4 -  Loop through each column
    for (var i = 0; i < to_check.length; i++) {
        // Extract the column from the grid
        var column = to_check.map(row => row[i]);
        // If the column is not valid
        if (!verifyArray(column)) {
            // Get the errorGrid element from the DOM
            var table = document.getElementById('errorGrid');
            // Create a new row
            var row = document.createElement('tr');
            // Create a new cell
            var cell = document.createElement('td');
            // Set the cell's text to indicate the incorrect column
            cell.textContent = 'column ' + (i + 1) + ' incorrect ';
            // Append the cell to the row
            row.appendChild(cell);
            // Loop through each cell in the column
            for (var  j = 0; j < column.length; j++) {
                // Create a new cell
                var cell = document.createElement('td');
                // Set the cell's text to the value in the column
                cell.textContent = column[j];
                // Append the cell to the row
                row.appendChild(cell);
            }
            // Append the row to the table
            table.appendChild(row);
            // Set the flag to false
            isTrue = false;
        }
    }
    // Return the flag
    return isTrue;
}

//q3 (F33) - Function to verify each 3x3 region in the Sudoku grid
function verifyRegion(to_check) {
    var isTrue = true; // Initialize a flag to true
    //q4 -  Loop through each 3x3 region
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var region = []; // Initialize an array to hold the region
            // Loop through each cell in the region
            for (var x = 0; x < 3; x++) {
                for (var y = 0; y < 3; y++) {
                    // Add the cell to the region array
                    region.push(to_check[i * 3 + x][j * 3 + y]);
                }
            }
            // If the region is not valid
            if (!verifyArray(region)) {
                // Get the errorGrid element from the DOM
                var table = document.getElementById('errorGrid');
                // Create a new row
                var row = document.createElement('tr');
                // Create a new cell
                var cell = document.createElement('td');
                // Set the cell's text to indicate the incorrect region
                cell.textContent = 'region ' + ((i * 3 + j) + 1) + ' incorrect ';
                // Append the cell to the row
                row.appendChild(cell);
                // Loop through each cell in the region
                for (var  z = 0; z < region.length; z++) {
                    // Create a new cell
                    var cell = document.createElement('td');
                    // Set the cell's text to the value in the region
                    cell.textContent = region[z];
                    // Append the cell to the row
                    row.appendChild(cell);
                }
                // Append the row to the table
                table.appendChild(row);
                // Set the flag to false
                isTrue = false;
            }
        }
    }
    // Return the flag
    return isTrue;
}
