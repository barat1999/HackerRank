/**
 * Problem: Day 1: Data Types
 * Description: Complete the code in the editor below. The variables i, d, and s are already declared and initialized for you. You must:

Declare 3 variables: one of type int, one of type double, and one of type String.
Read 3 lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your 3 variables.
Use the + operator to perform the following operations:
Print the sum of i plus your int variable on a new line.
Print the sum of d plus your double variable to a scale of one decimal place on a new line.
Concatenate s with the string you read as input and print the result on a new line.
Note: If you are using a language that doesn't support using + for string concatenation (e.g.: C), you can just print one variable immediately following the other on the same line. The string provided in your editor must be printed first, immediately followed by the string you read as input.

 * Link: https://www.hackerrank.com/challenges/30-data-types/problem
 */

//Solution

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var j,e,t;
    // Read and save an integer, double, and String to your variables.
     j = readLine();
     e = readLine();
     t = readLine();
    // Print the sum of both integer variables on a new line.
     console.log(i+Number(j));
    // Print the sum of the double variables on a new line.
     console.log((d+Number(e)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log((s+t));
}