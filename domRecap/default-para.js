function defaultName(first, second = ;"") {
  const fullName = first + " " + second;
  return fullName;
}

console.log(defaultName("Kamrul"));
