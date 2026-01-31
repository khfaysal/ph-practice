let motto = "I will learn js properly Insha'Allah";

let revmotto = motto.split("").reverse().join(" ");
// console.log(revmotto);

//split("")-> split all the letter with space.
//reverse()-> do the reverse
//join("")-> join all the words with proper space.

//Types for Reversing Numbers:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//Type-1
// let revNum = numbers.reverse();
// console.log(revNum);

//Type-2: Using [unshift]
// let rev_Num = [];
// for (const num of numbers) {
//   console.log(num);
//   rev_Num.unshift(num);
// }
// console.log(rev_Num);

//Type-3 : reverse store:
let rvNum = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  // console.log(i);
  rvNum.push(i);
}
console.log(rvNum);

