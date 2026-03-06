function addArray(arr_1, arr_2) {
  arr_1[0] = 100;
  arr_2[0] = 200;

  return (arr_1, arr_2);
}

const arrayOne = [1, 2, 3, 4, 5];
const arrayTwo = [6, 7, 8, 9, 10];

console.log("before function call: ", arrayOne, arrayTwo);

addArray(arrayOne, arrayTwo);

console.log("after function call: ", arrayOne, arrayTwo);
