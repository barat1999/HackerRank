/**
 * Problem: Day 6: Let's Review.
 * Description: Given a string,S, of length N that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.

 * Link: https://www.hackerrank.com/challenges/30-review-loop/problem
 */

//Solution

/** Sample Input
2
Hacker
Rank

Expected Output
Hce akr
Rn ak

**/

function processData(input) {
    var [inputCount, ...inputvalues] = input.split("\n");
    //Enter your code here
    for (let x of inputvalues) {
        var env = "", odd = "";
        for (let i = 0; i <= x.length - 1; i++) {
            if (i % 2 == 0) {
                env = env + x[i];
            }
            else {
                odd = odd + x[i];
            }
        }
        console.log(env + " " + odd);
    }
} 