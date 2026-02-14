// ***
const Products = [
  {
    name: "Mobile",
    type: "Phone",
    price: 10000,
  },
  {
    name: "Laptop",
    type: "Computer",
    price: 50000,
  },
  {
    name: "Tablet",
    type: "Computer",
    price: 20000,
  },
  {
    name: "Headphones",
    type: "Audio",
    price: 5000,
  },
  {
    name: "Mobile",
    type: "Wearable",
    price: 15000,
  },
];

function searchProducts(products, search) {
  const matched = [];
  for (const item of products) {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(item);
    }
  }
  return matched;
}

const result = searchProducts(Products, "MObile");

console.log(result);
