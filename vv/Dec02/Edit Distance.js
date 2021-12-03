/*
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character

horse ros

input: 2strings
output: number of Operation
constraint: insert delete replace
edge: none


        '' h o r s e
    ''  0  1 2 3 4 5
    r   1  1 2 2 3 4
    o   2  2 1 2 3 4
    s   3  3 2 2 2 3

    word1[i]!== word2[j]; Min(left, top, diagnose) + 1
    word1[i]=== word2[j];  diagnose


Example 1:
  Input: word1 = "horse", word2 = "ros"
  Output: 3
  Explanation:
  horse -> rorse (replace 'h' with 'r')
  rorse -> rose (remove 'r')
  rose -> ros (remove 'e')

Example 2:
  Input: word1 = "intention", word2 = "execution"
  Output: 5
  Explanation:
  intention -> inention (remove 't')
  inention -> enention (replace 'i' with 'e')
  enention -> exention (replace 'n' with 'x')
  exention -> exection (replace 'n' with 'c')
  exection -> execution (insert 'u')

  leetCode:
  https://leetcode.com/problems/edit-distance/
*/

var minDistance = function(word1, word2) {
  let table=[];
  for(let i=0;i<word2.length;i++){
    table[i]=[];
  }
  console.log(table)
};


word1 = "horse", word2 = "ros"
const test = minDistance(word1,word2);

console.log(test)
