function PandaCost(singara, samucha, jelapi) {
  if (
    typeof singara !== "number" ||
    typeof samucha !== "number" ||
    typeof jelapi !== "number"
  ) {
    return "Please provide a valid number";
  } else if (singara < 0 || samucha < 0 || jelapi < 0) {
    return "All parameter should be positive number";
  } else {
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jelapiPrice = 15;
    const singaraCost = singaraPrice * singara;
    const samuchaCost = samuchaPrice * samucha;
    const jelapiCost = jelapiPrice * jelapi;
    const totalFoodCost = singaraCost + samuchaCost + jelapiCost;
    return totalFoodCost;
  }
}

const totalCost = PandaCost(1, 2, 3);
console.log(totalCost);
