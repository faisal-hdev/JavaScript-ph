const person = {
  name: "Petter perker",
  profession: "developer",
  age: 25,
  salary: 30000,
  marred: true,
  "fav places": ["Natore", "kuakata", "Rajshahi"],
};
person.salary = 40000;
person["age"] = 26;
person["fav places"] = ["maldives", "bali", "pataya"];

console.log(person);

const keyName = "profession";
