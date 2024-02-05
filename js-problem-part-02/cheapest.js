const phones = [
  { name: "Samsung", price: "30000", camera: "12mp", color: "Blue" },
  { name: "Oppo", price: "20000", camera: "12mp", color: "Blue" },
  { name: "Iphone", price: "66000", camera: "12mp", color: "Blue" },
  { name: "xoami", price: "12000", camera: "12mp", color: "Blue" },
  { name: "walton", price: "320000", camera: "12mp", color: "Blue" },
  { name: "htc", price: "240000", camera: "12mp", color: "Blue" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (const phone of phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}
const cheap = getCheapestPhone(phones);
console.log("Cheapest phone is:", cheap);

function getHighestPhone(phones) {
  let max = phones[0];
  for (const phone of phones) {
    if (phone.price > max.price) {
      max = phone;
    }
  }
  return max;
}
const highestPrice = getHighestPhone(phones);
console.log("Highest Phone price:", highestPrice);
