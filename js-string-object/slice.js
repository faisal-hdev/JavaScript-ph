const address = "rajshahi";
const part = address.slice(3, 8);
// console.log(part);

const sentence = "I am a goog and hardworking person";
// console.log(sentence.split(" "));
// console.log(sentence.split("a"));

const friendsStr = "Rahim,Karim,Dalim,Malim,Olim";
const friends = friendsStr.split(",");
console.log(friends);

const realFriend = ["Rahim", "Karim", "dolim", "Kalim", "Talim", "Fahim"];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
