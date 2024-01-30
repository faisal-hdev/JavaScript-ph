/*========= Subtask-01 ========= */
// Find all the odd numbers from 61 to 100.
for (let i = 61; i <= 100; i = i + 2) {
  console.log(i);
}

/*========= Subtask-02 ========= */
// Find all the even numbers from 78 to 98.
for (let n = 78; n <= 98; n = n + 2) {
  console.log(n);
}

/*========= Subtask-03 ========= */
// Display sum of all the odd numbers from 91 to 129.
let sumOne = 0;
for (let a = 91; a <= 129; a = a + 2) {
  sumOne += a;
  console.log(a);
}
console.log("sum of numbers from 91 to 129 is", sumOne);

/*========= Subtask-04 ========= */
// Display sum of all the even numbers from 51 to 85.
let sumTow = 0;
for (let e = 51; e <= 85; e = e + 2) {
  sumTow = sumTow + e;
  console.log(e);
}
console.log("sum of numbers from 91 to 129 is", sumTow);
