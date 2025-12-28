/**
 * Problem: Day 5: Loops.
 * Description: Given an integer, n , print its first  multiples. Each multiple should be printed on a new line in the form: n x i = result.
 * Link: https://www.hackerrank.com/challenges/30-loops/problem
 */

//Solution

function main() {
    const n = parseInt(readLine().trim(), 10);
    for(let i=1;i<=10;i++){
        console.log(n + " x " + i + " = " + (n*i));
    }
}