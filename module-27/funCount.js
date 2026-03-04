function outerFun() {
  let count = 0;
  function innerFun() {
    count++;
    console.log("Value of count: ", count);
  }
  return innerFun;
}

const result = outerFun();

result();
result();
result();
