/**
 * TERNARY ----> three parts
 *      ?      :
 * condition ?  do something when true : do something when false
 */

const age = 17;

// normal if else .
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("ghumai thako bro");
// }

// simple ternary.
// age >= 18 ? console.log("Vote dio man") : console.log("ghumai thako bro");

let price = 500;
const isLeader = true;

// if (isLeader === true) {
//   price = 0;
// } else {
//   price = price + 100;
// }
// console.log(price);

price = isLeader === true ? 0 : price + 100;
// console.log(price);

// optional: semi advance ternary

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 1000;
}
