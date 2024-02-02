function add(price1, price2) {
  const total = price1 + price2;
  return total;
}

const bill = add(30, 40);
// console.log(bill);

function add2(price1, price2) {
  return price1 + price2;
}
const bill2 = add2(22, 10);
// console.log(bill2);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  return result;
}

const result = doMath(10, 5);
console.log(result);
