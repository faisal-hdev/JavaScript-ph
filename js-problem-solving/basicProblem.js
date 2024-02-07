const numbers = [22, 11, 55, 44, 1000, 90, 77, 805];

function findLargest(values) {
  if (!Array.isArray(values)) {
    return "Please provide an array";
  }

  let max = values[0];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== "number") {
      return "All value should be numbers";
    } else {
      if (values[i] > max) {
        max = values[i];
      }
    }
  }
  return max;
}

const output = findLargest(numbers);
console.log(output);
