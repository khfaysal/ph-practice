//Function Declaration..
// function OnOff() {
// console.log("Go towards the door.");
// console.log("Click the switch to off.");
// }

//Function Call: T-2
// OnOff();

// function add(a, b) {
//   const total = a + b;
//   console.log("Total some of those numbers are: ", total);
// }
// add(2, 3);

// T-2: Unreachable Code Line 
function CutHalf(nm) {
  const half = nm / 2;
  return half;
  console.log("Unreachable code...");
}

const output = CutHalf(20);
console.log(output);
