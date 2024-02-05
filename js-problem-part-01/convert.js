// 12 inch 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

function inchToFeet2(inch) {
  const feetFraction = inch / 2;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " fit " + inchRemaining + " inch.";
  return result;
}

const myHight = inchToFeet(75);
// console.log(myHight);
const myHight2 = inchToFeet2(75);
// console.log(myHight2);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

const result = mileToKilometer(12);
console.log(result);
