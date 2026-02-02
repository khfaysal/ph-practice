function SumOf(numbers) {
  let sum = 0;
  let sArr =[];
  for (const number of numbers) {
    console.log(number);
    sum += number;
    sArr.push(number);
  }
  return sum, sArr;
  
}

const arr = [1, 2, 3, 4, 5];
const total = SumOf(arr);

console.log("The total value of arr:", total);
