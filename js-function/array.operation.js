/**
 * Objective : wite a function to give me the sum of all numbers in an array
 * step 01 : declare a function.
 * step 02 : Call check wether the function is called properly
 * step 03 : Set a parameter(s).
 * step 04 : Pass the parameter(s), check wether parameter is passed
 * in a proper formate
 *
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  return sum;
}

const numbs = [1, 2, 3, 4, 4, 5, 6];
const sum = sumOfNumbers(numbs);
console.log("Sum of all numbers:", sum);
