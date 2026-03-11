const randomNumber = () => {
  const seTnumber = Math.floor(Math.random() * 10);
  console.log(seTnumber);
  localStorage.setItem("number", seTnumber);
};

const readNumber = () => {
  const geTnumber = localStorage.getItem("number");
  console.log("read from local storage", geTnumber);
};

// console.log("Object save in localStorage");

const objectStore = () => {
  const person = { name: "hasan", age: 22, boss: "faysal" };
  const personJson = JSON.stringify(person);
  console.log(person);
  localStorage.setItem("customer", personJson);
};

const showObj = () => {
  const getobj = localStorage.getItem("customer");
  const convertObj = JSON.parse(getobj);
  console.log("obj from localC: ", convertObj);
};
