// Check the number is even or odd

const x = 2;
if (x % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "The number is Even";
  } else {
    return "The number is Odd";
  }
}
const outPut = checkEvenOdd(2);
console.log(outPut);

function printName(x) {
  for (let i = 0; i <= x; i++) {
    console.log("FaisalH");
  }
}
printName(10);
