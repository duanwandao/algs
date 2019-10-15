// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
//
//     Grid cells are connected horizontally/vertically (not diagonally).
//     The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
//
// The island doesn't have "lakes" (water inside that isn't connected to the water around the island).
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
//
// Example:
//     Input:
//         [
//          [0,1,0,0],
//          [1,1,1,0],
//          [0,1,0,0],
//          [1,1,0,0]
//        ]


var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    let perimeter = 0;

    for (var row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!grid[row][col]) continue;

            perimeter += 4;

            //up
            if (row > 0 && grid[row - 1][col]) perimeter--;
            //left
            if (col > 0 && grid[row][col - 1]) perimeter--;
            //down
            if (row < rows - 1 && grid[row + 1][col]) perimeter--;
            //right
            if (col < cols - 1 && grid[row][col + 1]) perimeter--;
        }
    }
    return perimeter;
};
