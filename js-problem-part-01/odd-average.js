/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 *
 */

const numbers = [22, 33, 44, 55, 66, 77, 88, 96, 99];

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  console.log(odds);

  let sum = 0;
  for (const odd of odds) {
    sum = sum + odd;
  }

  const count = odds.length;
  const avg = sum / count;
  return avg;
}

const average = oddAverage(numbers);
console.log("Average of the odd number is:", average);
