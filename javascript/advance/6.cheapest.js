//[Finding cheapest from an Object]

const mobiles = [
  { Name: "Samsung", price: 100000, condition: "new" },
  { Name: "Iphone", price: 120000, condition: "new" },
  { Name: "Nokia", price: 50000, condition: "used" },
  { Name: "Oppo", price: 2000, condition: "new" },
];

function getCheapest(mobiles) {
  let min = mobiles[0];
  for (const phn of mobiles) {
    if (phn.price < min.price) {
      min = phn;
    }
  }
  return min;
}

const CheapPHone = getCheapest(mobiles);
console.log(CheapPHone);
