function countEvenNumbers(numbers) {
  let count = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      count++;
    }
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 6];
const total = countEvenNumbers(arr);

console.log("Total Number of Even Numbers Are:", total);
