// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104

// input: triangle array
// output: integer -> min sum
// contrains: see above
// edge case: 1 level -> return value



// 0 1 2 3 
// 2  5,6. 11,10,13 15,11,19,16

// [[2],[3,4],[6,5,7],[4,1,8,3]]  

//    0   1       2          3 
//    2  5,6  11,10,13  15,11,19,16

// 方法: 尾部递归法
// 解题思路:

// 假设三角形为:
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 尾部递归的想法是: 将第n行和第n-1行合并, 且n-1行的值是合并后最小的值.
// 三角形的合并顺序为: [6,5,7] + [4,1,8,3] = [6 + 1, 5 + 1, 7 + 3] = [7,6,10]; [3,4] + [7,6,10] = [3 + 6, 4 + 6] = [9, 10]; [2] + [9, 10] = [11];
// 代码:

var minimumTotal = function(triangle) {
  const mini = triangle[triangle.length - 1];
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      mini[j] = triangle[i][j] + Math.min(mini[j], mini[j + 1]);
    }
  }
  
  return mini[0];
};