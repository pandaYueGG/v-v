// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.
Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.

constraint:
2 <= cost.length <= 1000
0 <= cost[i] <= 999

var minCostClimbingStairs = function(cost) {
    
};

input: array of cost 
output: integer -> the number of the steps
constraint: see prompt
edgecase: cost.length === 0 : return 0
          cost.length === 1 : return const[0]
          cost.length === 2 : return 1 


// cost.length === 3 : [1, 100, 1]
  // step3 = min(array[0] + array[2], array[1])
// cost.length === 4: [1, 100, 1, 1]
  // step4 = step3 + 1
// length ==5 : [1, 100, 1, 3, 1]
  // step5 = step3 + 1

    if (cost[i - 1] < const[i]) {
      step at index i = step at index i - 2   + 1
      i + 1
    }
    if const[i - 1] > const[i]
    step at index i = step at index i - 2 + 1
    i + 2
  }

  Say f[i] is the final cost to climb to the top from step i. Then f[i] = cost[i] + min(f[i+1], f[i+2]).

  const minCostClimbingStairs = cost => {
    for (let i = 2; i < cost.length; i++)  
      cost[i] = Math.min(cost[i - 1] + cost[i], cost[i - 2] + cost[i]);
    return Math.min(cost.pop(), cost.pop())
  };