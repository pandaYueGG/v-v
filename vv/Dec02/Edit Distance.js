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
  algoExpert:levenshtein distance
*/

  function minDistance(str1, str2) {
    let result=[];
    for(let i=0;i<str2.length+1;i++){
      result.push([])
      for(let j=0;j<str1.length+1;j++){
        // first row
        if(i===0)result[i][j]=j;
        // first col
        if(j===0)result[i][j]=i
      }
    }
    for(let i=1;i<str2.length+1;i++){
      for(let j=1;j<str1.length+1;j++){
        if(str2[i-1]===str1[j-1]){
          // diagonal
          result[i][j]=result[i-1][j-1];
        }else{
          // compare top, left, diagonal
          result[i][j]=1+Math.min(result[i-1][j-1],result[i][j-1],result[i-1][j])
        }
      }
    }
    console.log(result)
    return result[str2.length][str1.length]
  }


word1 = "horse", word2 = "ros"
const test = minDistance(word1,word2);

console.log(test)
