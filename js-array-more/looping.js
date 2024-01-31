/**
 * LOOPING technique
 * 1. for loop
 * 2. while loop
 * 3. do while
 * 4. for foo ----> array loop korar jnno
 * 5. for in ----> object loop korar jnno
 */

const friends = ["Elon", "Bill", "Mark", "Ambani"];

for (const friend of friends) {
  //   console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
  //   console.log(i);
  //   console.log(friends[i]);
}

const nums = [3, 22, 33, 44, 545, 666, 777, 888, 1000];

for (let i = 0; i < nums.length; i++) {
  //   console.log(nums[i]);
}

let f = 0;
while (f < friends.length) {
  //   console.log(friends[f]);
  f++;
}

let n = 0;
while (n < nums.length) {
  console.log(nums[n]);
  n++;
}
