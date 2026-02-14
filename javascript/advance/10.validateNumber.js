

function validateProduct(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Only numbers are allowed...";
  }
  return a + b;
}

const result = validateProduct(5, 7);
console.log(result);
