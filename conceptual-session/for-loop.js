const fruits = ["apple", "mango", "orange", "banana"];

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}

for (const fruit of fruits) {
  console.log(fruit);
}
