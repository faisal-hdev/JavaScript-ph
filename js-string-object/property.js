const person = {
  name: "Petter perker",
  profession: "developer",
  age: 25,
  salary: 30000,
  marred: true,
  "fav places": ["Natore", "kuakata", "Rajshahi"],
};

// console.log(person);
// Dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);

// Bracket notation
// third bracket diya access kora
console.log(person["age"]);
const boyos = person["age"];
console.log(boyos);
console.log(person["fav places"]);
