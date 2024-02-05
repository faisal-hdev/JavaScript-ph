const prices = [20000, 30000, 50000, 100000, 35000, 40000];

function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log("The cheapest one is:", cheap);
