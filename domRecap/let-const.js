//CONSTANT variable cannot be reassigned a new value:
const country = "Bangladesh";
// country = "Bangladesi"; //not allowed to reassign.
console.log(country);

f
// function addFun(num) {
//   let count = 0;
//   for (const n of num) {
//     count = count += n;
//   }
//   return count;
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = addFun(numbers);
// console.log(result);

//CONSTANT ARRAY value can be changed but not reassigned the array:
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
console.log(numbers);
