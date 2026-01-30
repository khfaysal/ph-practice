// Type-1:
// const fruits = ["apple", "banana", "cherry"];

// for (const fruit of fruits) {
//   console.log(fruit);
//   console.log("I wanna eat");
// }

// Type-2:

// let num = 0;
// for (num = 0; num < 10; num++) {
//   console.log("love you..", num, "times");
// }

// Task-1: finding out: even odd

// let n = 1;
// for (n = 1; n < 20; n++) {
//   if (n % 2 !== 0) {
//     console.log(n);
//   }
// }

// Task-2: break
// let n = 1;
// for (n = 1; n < 20; n++) {
//     console.log(n);
//   if ((n == 5)) {
//     break;
//   }
// }

// Task-3: continue
for (let n = 1; n <= 20; n++) {
  if (n % 2 == 0) {
    console.log(n);
    continue;
  }
}
