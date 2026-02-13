const products = [
  { name: "Phone", price: 70000 },
  { name: "Laptop", price: 110000 },
  { name: "Pc", price: 300000 },
  { name: "Table", price: 10000 },
  { name: "Chair", price: 8000 },
];

function total(products) {
  let tAmount = 0;
  for (pro of products) {
    tAmount += pro.price;
  }
  return tAmount;
}

const TotalAmount = total(products);
console.log(TotalAmount);
