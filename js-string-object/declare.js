const pen = {
  name: "econo",
  price: 10,
  color: "black",
};

const pencil = new Object();
console.log(pencil);

const rubber = Object.create({});
console.log(rubber);

let str = "Mississippi";
console.log(str.indexOf("i", 3));

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in myObject) {
  console.log(myObject[prop]);
}

const x = "";
if (!x.length) {
  console.log("Hey");
} else {
  console.log("Hi");
}

const str2 = "Hello";
str2[0] = "h";
console.log(str2);
