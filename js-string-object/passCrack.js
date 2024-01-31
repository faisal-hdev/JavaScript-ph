// write a function , which crack a mid level password.

let correctPass = "hjG&&554$6&JHGu&YdXu";

const passCracker = () => {
  const bigLet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const smallLet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (singleBigLet of bigLet) {
    for (singleSmallLet of smallLet) {
      let pass = singleBigLet + singleSmallLet;
      console.log(pass);
    }
    // console.log(singleBigLet);
  }

  //   console.log(bigLet.toLocaleLowerCase().split(""));
};

passCracker();
