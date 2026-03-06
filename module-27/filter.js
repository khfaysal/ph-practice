const names = ["Ana", "André", "Maria", "João", "Pedro", "Carla"];
const NameStartWithA = names.filter((nm) => nm[0] === "A");
console.log(NameStartWithA);

const numbers = [ 1, 2, 8, 4, 4, 6, 8, 8, 10];
const EvenNum = numbers.filter((nm) => nm % 2 === 0);
console.log(EvenNum);

// With Map


const EvNum = numbers.map((nm) => {
  if (nm % 2 === 0) {
    return nm;
  } 
  else{
    return "faysal"
  }
});

console.log(EvNum);