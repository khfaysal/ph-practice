function add(a, b) {
  console.log("arguments", arguments); //[array like object]
  const newArray = [...arguments];
  return newArray;
}

const res = add(3, 4, 5, 6, 56, 8);
console.log(res);
