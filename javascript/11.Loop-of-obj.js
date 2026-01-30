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

const keyName = Object.keys(mobile);
// console.log(key);
// console.log(mobile[key]);
for (key of keyName) {
//   console.log(key, "::", mobile[key]);
}

console.log(mobile.processor);
