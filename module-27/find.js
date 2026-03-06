const status = [
  { name: "faysal", designation: "student", age: 22 },
  { name: "saim", designation: "student", age: 22 },
  { name: "sami", designation: "student", age: 22 },
];

const findFucker = status.find((sm) => sm.name === "saim");
console.log(findFucker);
