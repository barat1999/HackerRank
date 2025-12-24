/**
 * Problem: Simple Sum Array
 * Description: Given an array of integers, find the sum of its elements.
 * Link: https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

//Solution

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (let x of ar){
        sum = sum + x;
    }
    return sum;

}