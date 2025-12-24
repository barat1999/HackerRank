/**
 * Problem: A Very Big Sum
 * Description: print the sum of elements in an array, considering that some integers may be very large.
 * Link: https://www.hackerrank.com/challenges/a-very-big-sum/problem
 */

//Solution
function aVeryBigSum(ar) {
    // Write your code here
    var sum=0;
    for(let x of ar){
        sum = sum + x;
    }
    
    return sum;

}
