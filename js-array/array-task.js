// ================ Array Task 01 ================
const foods = ["Apple", "Mango", "Water-melon", "Stobery", "onion"];
const foodIndex = foods[3];
// console.log(foodIndex);
foods[3] = "jambura";
// console.log(foods);

// ================ Array Task 02 ================
const touristDestination = ["Sajek", "Coxbazar", "Bandorbon"];
// console.log(touristDestination);
touristDestination.push("Kuakata");
touristDestination.push("Rajshai", "Natore");
// console.log(touristDestination);
touristDestination.pop();
// console.log(touristDestination);

// ================ Array Task 03 ================
const books = ["math", "bangla", "english", "javaScript", "biology", "science"];
if (books.includes("javaScript")) {
  //   console.log("Book are here");
} else {
  {
    // console.log("Nothing the book");
  }
}

// ================ Array Task 04 ================
const arr = [11, 223, 44, 44, 222, 332, 45, 77, 100];
// console.log(Array.isArray(arr));

// ================ Array Task 05 ================
const arrOne = [22, 11, 33, 44, 5, 5];
// console.log(arrOne);
const arrTow = [77, 88, 99, 80, 60, 100];
// console.log(arrTow);
const children = arrOne.concat(arrTow);
// console.log(children);
