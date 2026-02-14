function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiplication(a, b);
    case "/":
      return division(a, b);
    default:
      return "Error: Invalid operator.";
  }
}
const result1 = calculator(10, 5, "-");
console.log(result1);
