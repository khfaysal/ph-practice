function swap(a, b) {
  console.log("a:" + a);
  console.log("b:" + b);
  let temp;

  temp = a;
  a = b;
  b = temp;

  return { a, b };
}

const result = swap(5, 7);

console.log("------");

console.log("a:" + result.a);
console.log("b:" + result.b);
