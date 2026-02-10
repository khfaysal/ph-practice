function swap(a, b) {
  //   console.log(a);
  //   console.log(b);

  a = a + b; //7
  b = a - b; //5
  a = a - b; // 2
  return { a, b };
}

const result = swap(5, 2);

console.log(result.a);
console.log(result.b);
