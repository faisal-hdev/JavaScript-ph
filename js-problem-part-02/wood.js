/**
 * chair ----> 3 cft
 * table ----> 10 cft
 * bed ----> 50 cft
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 6;
  const perBadWood = 8;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const tableBadWood = bedQuantity * perBadWood;

  const totalWood = chairTotalWood + tableTotalWood + tableBadWood;
  return totalWood;
}

const wood = woodQuantity(0, 0, 2);
console.log("wood needed:", wood);

/**====== Task min Number ======= */
/**
 * shirt price ----> 1200 cft
 * pant price ----> 800 cft
 * shoe price ----> 1000 cft
 */

function clothQuantity(shirtQuantity, pantQuantity, shoesQuantity) {
  const shirtPrice = 1200;
  const pantPrice = 800;
  const shoesPrice = 1000;

  const totalShirtPrice = shirtPrice * shirtQuantity;
  const totalPantPrice = pantPrice * pantQuantity;
  const totalShoesPrice = shoesPrice * shoesQuantity;

  const totalPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
  return totalPrice;
}

const cloth = clothQuantity(2, 2, 1);
console.log("Cloth Needed:", cloth);
