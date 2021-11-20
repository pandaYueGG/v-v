/*
You may recall that an array arr is a mountain array if and only if:
arr.length >= 3
There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given an integer array arr, return the length of the longest subarray, which is a mountain.
Return 0 if there is no mountain subarray.

Example 1:
Input: arr = [2,1,4,7,3,2,5]
Output: 5
Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

Example 2:
Input: arr = [2,2,2]
Output: 0
Explanation: There is no mountain.

Constraints:
1 <= arr.length <= 104
0 <= arr[i] <= 104
*/

input: arr
output: integer
constraint: none
edge: all the numbers are the same return 0

[2,1,4,7,3,2,5]
 0 1 2 3 4 5 6

 for loop start with index 1
  leftMax=0
  rightMax=0
  while loop to check left side of the index 1
    leftCount =0
    rightCount = 0
    while 
    if value is less than the curr value leftCount ++
    else break;
    while 
    if value is greater than the curr value of rightCount++
    else break;
    leftMax= max(leftMax,leftCount)
    rightMat= max(rightMax,rightCount)

    start = rightidx
return leftmax+rightMax+1;


// Do not edit the line below.
exports.longestPeak = longestPeak;
