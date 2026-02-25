// const arr = ["kamrul", "hasan", "faysal"];

// for (const name of arr) {
//   console.log(name);
// }

function desName(array) {
  let count = 0;

  for (const num of array) {
    count += num;
  }

  return count;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Total = desName(numbers);
console.log(Total);
