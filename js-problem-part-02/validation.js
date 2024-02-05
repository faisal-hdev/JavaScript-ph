function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a number";
  }
  const multiply = num1 * num2;
  return multiply;
}

const result = multiply(9, 9);
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "Please provide a string";
  } else if (typeof second !== "string") {
    return "Please provide a string";
  }
  const full = first + " " + second;
  return full;
}

const result2 = fullName("Faisal", "Hossen");
// console.log(result2);

function getPrice(products) {
  if (typeof products !== "object") {
    return "please provide an object";
  }
  const price = products.price;
  return price;
}

// const price = getPrice({ name: "Chulkanir dandi", price: 300, color: "blue" });
const price = getPrice(6);
// console.log(price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Please provide an array";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond([22, 222, 33]);
console.log(second);
