const mobile = {
  brand: "Samsung",
  model: "S24",
  price: 72000,
  camera: "12mp",
  processor: {
    Sanpdragon: "888",
    exynos: "680",
  },
};
// console.log(mobile.processor.exynos);

//Keys

const snap = Object.keys(mobile);
const dragong = Object.values(mobile);
console.log("--------------------------");
console.log("Keys.......");

console.log(snap);
console.log("--------------------------");
console.log("Values........");

console.log(dragong);
console.log("--------------------------");
