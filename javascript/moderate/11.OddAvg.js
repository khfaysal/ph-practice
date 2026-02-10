function OddAvg(arr) {
  let total = 0;
  let count = 0;
  for (const num of arr) {
    // console.log(num);
    if (num % 2 != 0) {
      total += num;
      count++;
    }
  }
  return total / count;
}

const arr = [42, 13, 58, 65, 81, 96, 7];
const avgofODD = OddAvg(arr);
console.log(avgofODD);
