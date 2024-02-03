// const course = {
//   subject: "javaScript",
//   duration: "2 months",
//   credit: 1.5,
// };

// dot notation
// console.log(course.subject);

// bracket notation
// console.log(course["duration"]);

// course.price = "$1234";
// course["subject"] = "java";

// delete course.credit;
// console.log(course);

const course = {
  subject: "javaScript",
  duration: "2 months",
  credit: 1.5,
};

function courseDetails(obj) {
  if (typeof obj === "object") {
    console.log("valid input");
  } else {
    return "invalid input";
  }
  console.log(typeof obj);
  return `Course name is ${obj?.subject},
   Course duration is ${obj?.duration}. 
   if take this course you will earn ${obj?.credit} credit`;
}

// console.log(courseDetails(course));

const myArr = ["22"];
const myObj = { name: "Faisal Hossen" };
console.log(typeof myArr);
console.log(typeof myObj);
