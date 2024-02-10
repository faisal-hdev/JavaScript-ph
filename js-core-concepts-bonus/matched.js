const products = [
  { id: 6, name: "Nokia phone", price: 1200 },
  { id: 5, name: "One plus phone", price: 1200 },
  { id: 1, name: "Walton phone 22w", price: 1200 },
  { id: 2, name: "iPhone 14", price: 111200 },
  { id: 4, name: "Samsung Phone s21", price: 121200 },
  { id: 3, name: "Mac book Air Laptop ", price: 66200 },
  { id: 3, name: "Mac book pro Laptop ", price: 66200 },
  { id: 3, name: "Laptop lenovo yoga", price: 66200 },
];
// for (const product of products) {
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}
const result = matchedProducts(products, "phone");
console.log(result);
