function add(num1, num2) {
  return num1 + num2;
}

function subsTract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divided(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  } else if (operation === "subtract") {
    const result = subsTract(a, b);
    return result;
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else {
    return "Only 'add', 'subtract', 'multiply', 'divided' operation is allowed";
  }
}

const result = calculator(5, 6, "multiply");
console.log(result);
