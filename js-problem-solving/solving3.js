/**
 * jodi 100 ba tar kom jai tahole prottek ar khoroch hobe 5000 taka kore.
 *
 * abr jodi 100 ar besi kintu 200 ar kom ba soman jai tahole prothom 100 jon ar proti jon ar jonno 5000 tk kore dite hobe. ar 100 jon ar besi orthath 101 number thekey joto jon ache tader prottek ar jonno 4000 tk kore dite hobe.
 *
 * ar jodi 200 ar besi jai tahole prothom 100 jon ar proti jon ar jnno 5000 tk kore dite hobe. ar
 */

function PicnicBudget(participants) {
  if (typeof participants !== "number" || participants < 0) {
    return "participants should be a valid positive number";
  } else {
    let first100Cost = 0;
    let second101To200Cost = 0;
    let remainingCost = 0;
    let totalCost = 0;
  }
  if (participants <= 100) {
    first100Cost = participants * 5000;
    return first100Cost;
  } else if (participants <= 200) {
    first100Cost = 5000 * 100;
    second101To200Cost = (participants - 100) * 4000;
    total = first100Cost + second101To200Cost;
    return total;
  } else {
    first100Cost = 5000 * 100;
    second101To200Cost = 4000 * 100;
    remainingCost = (participants - 200) * 3000;
    total = first100Cost + second101To200Cost + remainingCost;
    return total;
  }
}

console.log(PicnicBudget(202));
