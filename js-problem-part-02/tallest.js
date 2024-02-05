const height = [33, 44, 55, 66, 77, 88, 99];

function getMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const max = getMax(height);
console.log("Max value is:", max);

/**====== Task min Number ======= */
function getMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
    return min;
  }
}

const max2 = getMin(height);
console.log("Min value is:", max2);
