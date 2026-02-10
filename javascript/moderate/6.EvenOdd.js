function countEvenNumbers(numbers) {
  let count = 0;
  let sum = 0;
  let c = 1;
  for (const number of numbers) {
    if (number % 2 === 0) {
      count++;
      console.log(c, "Even Number: ", number);
      sum += number;
      c++;
    }
  }
  console.log("Number of Even number: ", count);
  return sum;
}

const arr = [1, 2, 3, 4, 5, 6];
const total = countEvenNumbers(arr);

console.log("Total Sum of Those Even Numbers Are:", total);
