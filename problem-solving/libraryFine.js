/**
 * Problem: Library Fine
 * Description: Given the expected and actual return dates for a library book, create a program that calculates the fine (if any)
 * Link: https://www.hackerrank.com/challenges/library-fine/problem
 */

//Solution

function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if(y1>y2){
        return 10000;
    }
    
    if(y2>y1){
        return 0;
    }
    
    if(m1>m2){
        return 500 * (m1-m2);
    }
    if(m2>m1){
        return 0;
    }
    if(d2>d1){
        return 0;
    }
    else{
        return 15 * (d1-d2);
    }

}
