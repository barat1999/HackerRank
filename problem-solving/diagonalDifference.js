/**
 * Problem: Diagonal Difference
 * Description: Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * Link: https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

//Solution
function diagonalDifference(arr) {
    // Write your code here
    var first=0,second=0;
    for(let i=0;i<=arr.length-1;i++){
        for(let j=0;j<=arr[0].length-1;j++){
            if(i==j){
                first = first + arr[i][j];
            }
            if(i+j==arr.length-1){
                second = second + arr[i][j];
            }
        }
    }
    return Math.abs(first-second);

}