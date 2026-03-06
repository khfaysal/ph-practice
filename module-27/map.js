const arr = [1, 2, 3, 4, 5];

// const doubleIt = (num) => num * 2;
// const result = arr.map(doubleIt);
const res = arr.map((num) => num * 3);
console.log(res);

// Type-2

const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];

const FirstLetter = friends.map((frd) => frd[0]);
console.log(FirstLetter);



// Type-3 

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const productNames = products.map((product) => product.name);
console.log(productNames);


// Type-4 

const NameUpperCase = products.map(pro => {
    const Name = pro.name.toUpperCase();
    return Name;
})

console.log(NameUpperCase);
