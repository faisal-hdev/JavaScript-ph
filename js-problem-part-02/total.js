const products = [
  { name: "Shampoo", price: 300 },
  { name: "Pen", price: 100 },
  { name: "Keyboard", price: 900 },
  { name: "Mouse", price: 800 },
  { name: "Lamp light", price: 600 },
];

function getShoppingTotal(products) {
  let total = 0;
  for (const product of products) {
    // console.log(product);
    total = total + product.price;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log("Total price is:", total);
