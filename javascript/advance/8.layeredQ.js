// Layered Quantity

// quantity -> 2 -- 5 -- 7

function layeredQ(quantity) {
  const first100 = 180;
  const bellow200 = 160;
  const above200 = 150;

  if (quantity <= 2) {
    total = quantity * first100;
    return total;
  } else if (quantity <= 5) {
    const firstHundred = 2 * first100;
    const rest = (quantity - 2) * bellow200;
    total = firstHundred + rest;
    return total;
  } else if (quantity > 5) {
    const firstHundred = 2 * first100;
    const secondHundred = 3 * bellow200;
    const rest = (quantity - 5) * 150;
    const total = firstHundred + secondHundred + rest;
    return total;
  } else {
    console.log("Invalid Input");
  }
}

const check = layeredQ(6);
console.log(check);
