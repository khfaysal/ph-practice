function outerFun() {
  function innerFun() {
    console.log("this is inner function");
    return 'nothing..';
  }
  return innerFun();
}

const result = outerFun();
console.log(result);
