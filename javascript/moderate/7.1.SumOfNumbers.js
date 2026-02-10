let total = 0;
function SumOfNumber(nums) {
  for (const num of nums) {

    total += num;
    // console.log(num);
  }
  return total;
}

const arr = [20, 21, 22, 23];
const Sum = SumOfNumber(arr);
console.log(Sum);
