const numbers = [22, 33, 44, 55, 66, 777, 788, 999];

// console.log(numbers);
// const reversed = numbers.reverse();
// // console.log(reversed);

const rev_nums = [];
for (const num of numbers) {
  //   console.log(num);
  rev_nums.unshift(num);
}
// console.log(rev_nums);

const reversed_numbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  //   console.log(num);
  reversed_numbers.unshift(num);
}
// console.log(reversed_numbers);
