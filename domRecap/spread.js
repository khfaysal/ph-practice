const num = Math.max(2, 3, 4, 5, 2, 6, 19);
// console.log(num);

const num2 = [1, 2, 3, 4, 5];
console.log("Array:", num2);
console.log("Numbers: ", ...num2);

console.log("Max Num: ", Math.max(...num2));

// Type - 2:
console.log("TYPE TWO.......................");

function addNum(x, y, z) {
  console.log(x, y, z);

  return x + y + z;
}

const params = [34, 55, 77];

const result = addNum(...params);
console.log(result);
