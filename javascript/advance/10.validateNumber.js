// const Product = [
//   {
//     name: "Mobile",
//     price: 10000,
//     category: "Electronics",
//     varient: "Global",
//   },
// ];

function validateProduct(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Only numbers are allowed...";
  }
  return a + b;
}

const result = validateProduct(5, 7);
console.log(result);
