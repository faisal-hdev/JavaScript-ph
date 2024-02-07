function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    console.log("Write a right number");
  }
  return x + y;
}
// console.log(add(1, 22));

function details(info) {
  if (typeof info !== "object") {
    return "Input should be an object";
  } else if (!info.name || !info.age) {
    return "Object must contain name and age property";
  } else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return "Name should be string and age should be a number";
  } else if (info.age <= 0) {
    return "Age should be positive number";
  }
  return `my name is ${info.name}. i am ${info.age} year old.`;
}

console.log(details({ name: "faisal", age: 20 }));
// console.log(details("xyzs"));
