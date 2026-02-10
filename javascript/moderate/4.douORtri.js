function doubleORtriple(number, double) {
  if (double === true) {
    return number * 2;
  } else {
    return number * 3;
  }
}

console.log(doubleORtriple(12, true));
console.log(doubleORtriple(12, false));
