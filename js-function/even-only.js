/**
 * Create a function that will return only the even numbers
 * return the sum of numbers
 */

const numbers = [5, 6, 91, 24, 8];

function evenNumbersOnly(numbers) {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}

const numbs = evenNumbersOnly(numbers);
console.log("Even numbers only array:", numbs);

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
    }
  }
  return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log("Sum of the even numbs is:", sum);
