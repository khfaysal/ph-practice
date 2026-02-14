function validateString(first, second) {
  if (typeof first !== "string" || typeof second !== "string") {
    return "only strings are allowed..";
  }
  const fS = first + " " + second;
  return fS;
}

const result = validateString("Hello", "World");
console.log(result);
