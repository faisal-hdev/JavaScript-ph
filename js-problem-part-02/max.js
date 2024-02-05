const disha = 66;
const salman = 45;

if (disha > salman) {
  console.log("Disha will get the strawberry");
} else {
  console.log("salman will eat the strawberry");
}

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(96, 76);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max, max2);
console.log("max of tow is:", ultimateMax);
