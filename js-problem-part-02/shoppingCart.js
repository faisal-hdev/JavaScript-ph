const products = [
  { name: "Shampoo", price: 300, quantity: 1 },
  { name: "Pen", price: 100, quantity: 5 },
  { name: "Keyboard", price: 900, quantity: 2 },
  { name: "Mouse", price: 800, quantity: 4 },
  { name: "Lamp light", price: 600, quantity: 3 },
];

function cartTotal(products) {
  let total = 0;
  for (const product of products) {
    const thisProductCost = product.price * product.quantity;
    total = total + thisProductCost;
  }

  return total;
}

const shoppingCost = cartTotal(products);
console.log("Total Shopping Cost:", shoppingCost);
