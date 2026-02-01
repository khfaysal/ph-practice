//Ternary Operator:

// const number = 15;

// number > 2 ? console.log("you are right") : console.log("you are wrong");

var bill = 100;
const isStakeholder = true;
const isNotStakeholder = true;

//Way one:
// if (isStakeholder === true) {
//   if (bill >= 1000) {
//     bill = bill / 2;
//   } else {
//     bill = 0;
//   }
// } else {
//   bill = bill * 1.5;
// }
// console.log(bill);

//Way two: Ternary Operator
(isStakeholder === true && bill >= 1000) ? bill = bill / 2 : bill = bill * 1.5;

console.log(bill);
