const employee = {
  name: "Kamrul",
  age: 24,
  designaton: "Student",
  c_tudying: "MERN",
  course: {
    name: "jani nah",
    dep: "SWE",
    hour: {
      age: 5,
    },
  },
};

// console.log(employee["name"]);
// console.log(employee["age"]);
// console.log(employee["designaton"]);
// console.log(employee.course.dep);
//OPTIONAL CHAINING
console.log(employee.course?.hour?.age);
