const jim = 400;
const tim = 44;
const kim = 330;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate Boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the Boss");
} else {
  console.log("Kim is the kardasian Boss");
}

function maxOfThree(num1, num2, num3) {
  // do it your self
  if (num1 > num2 && num1 > num3) {
    return "Num1 is the biggest number";
  } else if (num2 > num1 && num2 > num3) {
    return "Num2 is the biggest number";
  } else {
    return "Num3 is the biggest number";
  }
}

const maxOf3 = maxOfThree(330, 404, 550);
console.log(maxOf3);

const max = Math.max(12, 1, 22, 31, 32, 11, 19, 40, 99);
console.log("Max using Math.max", max);
