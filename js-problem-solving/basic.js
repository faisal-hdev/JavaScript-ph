// Basic Function

function printName(fullName) {
  console.log(fullName);
}

const firstName = "Faisal";
const lastName = "Hossen";
const fullName = firstName + lastName;
printName(fullName);

function printDetails(name, age, address) {
  console.log(
    `My name is ${name}. i am ${age} years old. i live in ${address}.`
  );
}

printDetails("Faisal", "20", "Dhaka");

function add(x, y) {
  const total = x + y;
  return total;
}

const z = add(30, 5);
console.log(z);
