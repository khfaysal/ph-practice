function max(arr) {
  let mx = 0;
  for (const nums of arr) {
    if (nums > mx) {
      mx = nums;
    }
  }
  return mx;
}

const arr = [1, 2, 3, 4, 5];
const result = max(arr);
console.log(result);

// Another-Type

const array = [1, 2, 3, 4, 5];
const rsl = Math.max(...array);
console.log(rsl);
