//Object: { key : value}
// T-1:
const FruitBox = {
  name: "Apple",
  price: 45,
  isClean: false,
};

// console.log(FruitBox);

// T-2:

const person = {
  name: "Kamrul",
  age: 23,
  status: "Student",
  married: false,
  subject: ["math", "chemistry", "swe"],
};
// console.log(person);
person.name= 'Faysal';
person.subject=['swe', 'cse'];
// console.log(person);

// T-3: Find Only Objects..&..Only Values:
const keys= Object.keys(person);
const values = Object.values(person);
// console.log(keys);
// console.log(values);




