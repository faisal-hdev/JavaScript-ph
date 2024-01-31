const mobile = {
  name: "Samsung",
  price: 22000,
  color: "black",
  camera: "12mp",
};

// for in : use array
// for of : use obj
for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
