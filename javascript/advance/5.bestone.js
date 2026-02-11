const prices = [10000, 20000, 30000, 40000, 50000];

function getMax(prices) {
  let fPrice = 0;
  //   console.log(prices);
  for (const price of prices) {
    if (price > fPrice) {
      fPrice = price;
    }
  }
  return fPrice;
}

const luxury = getMax(prices);

console.log(luxury);
