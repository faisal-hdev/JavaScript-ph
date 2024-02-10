const products = [
  { id: 1, name: "Nokia phone", price: 1200 },
  { id: 2, name: "One plus phone", price: 1200 },
  { id: 3, name: "Walton phone 22w", price: 1200 },
  { id: 4, name: "iPhone 14", price: 111200 },
  { id: 5, name: "Samsung Phone s21", price: 121200 },
  { id: 6, name: "Poco Phone sx", price: 1100 },
  { id: 7, name: "Mac book Air Laptop ", price: 66200 },
  { id: 8, name: "Mac book pro Laptop ", price: 66200 },
  { id: 9, name: "Laptop lenovo yoga", price: 66200 },
];

function matchedProducts(products, search) {
  let matchedProducts = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matchedProducts.push(product);
    }
  }
  return matchedProducts;
}

const result = matchedProducts(products, "Laptop");
console.log(result);
