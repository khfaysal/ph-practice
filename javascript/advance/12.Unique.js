function UniqueArr(arr) {
  const unique = [];
  for (const num of arr) {
    if (unique.includes(num) === false) {
      unique.push(num);
    }
  }
  return unique;
}

const arr = [1, 2, 3, 4, 3, 4, 5, 6, 4, 7, 8, 7, 8, 9];
const uniqueArray = UniqueArr(arr);

console.log(uniqueArray);
