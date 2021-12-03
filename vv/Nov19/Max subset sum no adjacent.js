/*

There is unsorted positive integer array, return a maximum sum of non adjacent elements.
if the input array is empty, the function should return 0

example:
input array: [3, 20, 15, 2, 18] output: 38 // 20 + 18 = 38
input array: [4, 1, 6, 3, 2] output: 12 // 4 + 6 + 2 = 12

*/

function maxSubsetSumNoAdjacent(array) {
  if(array.length===0)return 0;
  if(array.length===1) return array[0]
  array[1]=Math.max(array[0],array[1]);

  for(let i =2;i<array.length;i++){
    if(array[i-2]+array[i]>array[i-1]){
      array[i]=array[i-2]+array[i]
    }else{
      array[i]=array[i-1]
    }
  }
  return array[array.length-1];
}

exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;


      // 3 20 15 2 18
      // 3 20 20 22 38

      // input: array
      // output:interger
      // constraint: non adjacent, positive integer
      // edge: empty return 0
      //       array.length===1 return array[0]
      //       array.length===2 return Math.max(array[0],array[1]);