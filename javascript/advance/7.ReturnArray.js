function returnArr(arr) {
  let odd = [];
  for (const num of arr) {
    if (num % 2 != 0) {
      console.log(num);
      odd.push(num);
    }
  }
  return odd;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ShowOdd = returnArr(arr);
console.log(ShowOdd);
console.log("nothing");
console.log("Just trying to maintain the streak..");
