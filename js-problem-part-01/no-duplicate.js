/**
 * Array has some duplicate elements
 * []
 *
 */

const biryaniKhor = ["abul", "dabul", "cabul", "labul", "dabul", "abul"];
const numbers = [1, 22, 33, 44, 22, 31, 7, 88, 1, 8, 88, 7, 22];

// step: 1
function noDuplicate(array) {
  // step: 3
  const unique = [];
  // step: 2
  for (const item of array) {
    // step: 4
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  // step: 5
  return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
console.log(uniqueArray);
