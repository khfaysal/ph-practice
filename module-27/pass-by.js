function multiply(a, b) {
  a = a - 5;
  b = b - 10;
  console.log("Multiplication: ", a * b);

  return (a, b);
}

let x = 10;
let y = 20;

console.log("before passing the value: ", x, y);

multiply(x, y);
console.log("after passing the value", x, y);
