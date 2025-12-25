/**
 * Problem: Day 2: Operators.
 * Description: Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.
 * Link: https://www.hackerrank.com/challenges/30-operators/problem
 */

//Solution

function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    var final = meal_cost + ((meal_cost*tip_percent)/100) + ((meal_cost*tax_percent)/100);
    console.log(final.toFixed(0));

}
