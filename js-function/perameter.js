function square(number) {
  console.log("value of the number parameter", number);
  const borgo = number * number;
  console.log("Square of the given number is:", borgo);
}
square(4);
square(3);
square(5);
square(10);

function add(num1, num2) {
  const sum = num1 + num2;
  console.log("Total:", sum);
}
add(10, 20);

function addAll(a, b, c, d, e) {
  console.log(a, b, c, d, e);
  const totalAll = a + b + c + d + e;
  console.log("Total All:", totalAll);
}
addAll(10, 20, 30, 40, 50);
